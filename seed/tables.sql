CREATE TABLE IF NOT EXISTS traveler (
  id              UUID UNIQUE DEFAULT gen_random_uuid(),
  email_address   VARCHAR(100) UNIQUE NOT NULL,
  email_confirmed BOOLEAN DEFAULT FALSE,
  first_name      VARCHAR(50),
  last_name       VARCHAR(50),
  password        VARCHAR(100) NOT NULL,
  created_at      TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS billing(
  account_type VARCHAR(10) DEFAULT 'free',
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  traveler_id  UUID NOT NULL,
  CONSTRAINT fk_traveler FOREIGN KEY(traveler_id) REFERENCES traveler(id)
);

CREATE TABLE IF NOT EXISTS settings(
  is_dark     BOOLEAN DEFAULT TRUE,
  font_family VARCHAR(50) DEFAULT 'default',
  created_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  traveler_id UUID NOT NULL,
  CONSTRAINT fk_traveler FOREIGN KEY(traveler_id) REFERENCES traveler(id)
);

CREATE TABLE IF NOT EXISTS journey (
  id          UUID UNIQUE DEFAULT gen_random_uuid(),
  title       VARCHAR(255),
  description VARCHAR(255),
  created_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  end_date    TIMESTAMP WITH TIME ZONE NOT NULL,
  traveler_id UUID NOT NULL,
  CONSTRAINT  fk_traveler FOREIGN KEY(traveler_id) REFERENCES traveler(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS notes (
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  journey_id UUID NOT NULL,
  CONSTRAINT fk_journey FOREIGN KEY(journey_id) REFERENCES journey(id)
);

CREATE TABLE IF NOT EXISTS entry (
  id             UUID UNIQUE DEFAULT gen_random_uuid(),
  title          VARCHAR(100),
  slug           VARCHAR(100),
  body           TEXT,
  created_at     TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at     TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  journey_id     UUID DEFAULT NULL,
  CONSTRAINT     fk_journey FOREIGN KEY(journey_id) REFERENCES journey(id),
  traveler_id    UUID NOT NULL,
  CONSTRAINT     fk_traveler FOREIGN KEY(traveler_id) REFERENCES traveler(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS revision (
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  entry_id   UUID NOT NULL,
  CONSTRAINT fk_entry FOREIGN KEY(entry_id) REFERENCES entry(id)
);

CREATE TABLE IF NOT EXISTS marginalia (
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  entry_id   UUID NOT NULL,
  CONSTRAINT fk_entry FOREIGN KEY(entry_id) REFERENCES entry(id)
);

CREATE TABLE IF NOT EXISTS log (
  action        VARCHAR(50),
  type          VARCHAR(10),
  stat          VARCHAR(20),
  resource_link VARCHAR(100),
  created_at    TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  traveler_id   UUID NOT NULL,
  CONSTRAINT    fk_traveler FOREIGN KEY(traveler_id) REFERENCES traveler(id),
);
