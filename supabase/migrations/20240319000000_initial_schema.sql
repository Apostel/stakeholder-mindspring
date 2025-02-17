
-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "vector";

-- Core tables
CREATE TABLE stakeholders (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name TEXT NOT NULL,
    organization TEXT NOT NULL,
    role TEXT,
    email TEXT,
    linkedin_url TEXT,
    twitter_handle TEXT,
    communication_style JSONB,
    interests TEXT[],
    metadata JSONB,
    search_vector TSVECTOR GENERATED ALWAYS AS (
        to_tsvector('english', 
            COALESCE(name, '') || ' ' || 
            COALESCE(organization, '') || ' ' || 
            COALESCE(role, '')
        )
    ) STORED
);

CREATE TABLE interactions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    stakeholder_id UUID REFERENCES stakeholders(id) ON DELETE CASCADE,
    interaction_type TEXT NOT NULL,
    interaction_date TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    notes TEXT,
    sentiment_score FLOAT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE communication_patterns (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    stakeholder_id UUID REFERENCES stakeholders(id) ON DELETE CASCADE,
    pattern_type TEXT NOT NULL,
    confidence FLOAT NOT NULL,
    analysis_data JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE social_media_data (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    stakeholder_id UUID REFERENCES stakeholders(id) ON DELETE CASCADE,
    platform TEXT NOT NULL,
    platform_id TEXT,
    content_type TEXT NOT NULL,
    content JSONB,
    engagement_metrics JSONB,
    collected_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create stakeholder_access table for RLS
CREATE TABLE stakeholder_access (
    stakeholder_id UUID REFERENCES stakeholders(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    access_level TEXT NOT NULL,
    granted_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    PRIMARY KEY (stakeholder_id, user_id)
);

-- Indexes for performance
CREATE INDEX stakeholders_search_idx ON stakeholders USING gin(search_vector);
CREATE INDEX interactions_stakeholder_idx ON interactions(stakeholder_id);
CREATE INDEX social_media_stakeholder_idx ON social_media_data(stakeholder_id);
CREATE INDEX stakeholder_access_user_idx ON stakeholder_access(user_id);

-- Row Level Security Policies
ALTER TABLE stakeholders ENABLE ROW LEVEL SECURITY;
ALTER TABLE interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE communication_patterns ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_media_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE stakeholder_access ENABLE ROW LEVEL SECURITY;

-- Stakeholder access policies
CREATE POLICY "Users can view stakeholders they have access to"
    ON stakeholders FOR SELECT
    USING (
        auth.uid() IN (
            SELECT user_id FROM stakeholder_access WHERE stakeholder_id = id
        )
    );

CREATE POLICY "Users can insert stakeholders"
    ON stakeholders FOR INSERT
    WITH CHECK (auth.uid() IS NOT NULL);

-- Interaction access policies
CREATE POLICY "Users can view interactions for accessible stakeholders"
    ON interactions FOR SELECT
    USING (
        stakeholder_id IN (
            SELECT stakeholder_id FROM stakeholder_access 
            WHERE user_id = auth.uid()
        )
    );

-- Communication patterns access policies
CREATE POLICY "Users can view patterns for accessible stakeholders"
    ON communication_patterns FOR SELECT
    USING (
        stakeholder_id IN (
            SELECT stakeholder_id FROM stakeholder_access 
            WHERE user_id = auth.uid()
        )
    );

-- Social media data access policies
CREATE POLICY "Users can view social media data for accessible stakeholders"
    ON social_media_data FOR SELECT
    USING (
        stakeholder_id IN (
            SELECT stakeholder_id FROM stakeholder_access 
            WHERE user_id = auth.uid()
        )
    );

-- Add updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_stakeholders_updated_at
    BEFORE UPDATE ON stakeholders
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_communication_patterns_updated_at
    BEFORE UPDATE ON communication_patterns
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
