
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Stakeholders table
CREATE TABLE stakeholders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    full_name TEXT NOT NULL,
    title TEXT,
    organization TEXT,
    email TEXT,
    phone TEXT,
    linkedin_url TEXT,
    twitter_handle TEXT,
    category TEXT,
    tags TEXT[],
    influence_score DECIMAL(3,2),
    engagement_level TEXT,
    notes TEXT,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    last_contact_date TIMESTAMP WITH TIME ZONE
);

-- Communications table
CREATE TABLE communications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    stakeholder_id UUID REFERENCES stakeholders(id) ON DELETE CASCADE,
    type TEXT NOT NULL, -- email, meeting, call, social_media, etc.
    direction TEXT NOT NULL, -- incoming, outgoing
    content TEXT,
    sentiment DECIMAL(3,2),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    date TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Organizations table
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name TEXT NOT NULL,
    industry TEXT,
    website TEXT,
    linkedin_url TEXT,
    description TEXT,
    size_category TEXT,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Relationships table (for stakeholder-to-stakeholder connections)
CREATE TABLE relationships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    stakeholder1_id UUID REFERENCES stakeholders(id) ON DELETE CASCADE,
    stakeholder2_id UUID REFERENCES stakeholders(id) ON DELETE CASCADE,
    relationship_type TEXT,
    strength DECIMAL(3,2),
    notes TEXT,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    UNIQUE(stakeholder1_id, stakeholder2_id)
);

-- News mentions table
CREATE TABLE news_mentions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    stakeholder_id UUID REFERENCES stakeholders(id) ON DELETE CASCADE,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    publication_date TIMESTAMP WITH TIME ZONE NOT NULL,
    source TEXT,
    summary TEXT,
    sentiment DECIMAL(3,2),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE
);

-- RLS Policies
ALTER TABLE stakeholders ENABLE ROW LEVEL SECURITY;
ALTER TABLE communications ENABLE ROW LEVEL SECURITY;
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE relationships ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_mentions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can see their own stakeholders"
    ON stakeholders FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own stakeholders"
    ON stakeholders FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own stakeholders"
    ON stakeholders FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own stakeholders"
    ON stakeholders FOR DELETE
    USING (auth.uid() = user_id);

-- Similar policies for other tables
CREATE POLICY "Users can see their own communications"
    ON communications FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own communications"
    ON communications FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Add similar policies for organizations, relationships, and news_mentions tables

-- Create indexes for better query performance
CREATE INDEX idx_stakeholders_user_id ON stakeholders(user_id);
CREATE INDEX idx_communications_stakeholder_id ON communications(stakeholder_id);
CREATE INDEX idx_relationships_stakeholders ON relationships(stakeholder1_id, stakeholder2_id);
CREATE INDEX idx_news_mentions_stakeholder_id ON news_mentions(stakeholder_id);
CREATE INDEX idx_news_mentions_organization_id ON news_mentions(organization_id);

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

-- Add similar triggers for other tables that have updated_at
