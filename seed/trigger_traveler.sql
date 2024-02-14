-- Settings
CREATE OR REPLACE FUNCTION generate_settings()
RETURNS TRIGGER
LANGUAGE PLPGSQL
AS $$
BEGIN
  INSERT INTO settings(traveler_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER generate_settings_trigger
AFTER INSERT
ON "traveler"
FOR EACH ROW 
EXECUTE FUNCTION generate_settings();

-- Billing
CREATE OR REPLACE FUNCTION generate_billing()
RETURNS TRIGGER
LANGUAGE PLPGSQL
AS $$
BEGIN
  INSERT INTO billing(traveler_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER generate_billing_trigger
AFTER INSERT
ON "traveler"
FOR EACH ROW
EXECUTE FUNCTION generate_billing();
