CREATE OR REPLACE FUNCTION generate_log()
RETURNS TRIGGER
LANGUAGE PLPGSQL
AS $$
BEGIN
  INSERT INTO log(action, type, stat, resource_link, traveler_id)
  VALUES (
     
    NEW.traveler_id
  );
  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER generate_log_trigger
AFTER INSERT
ON "entry"
FOR EACH STATEMENT
EXECUTE FUNCTION generate_log();

CREATE OR REPLACE TRIGGER generate_log_trigger
AFTER INSERT
ON "journey"
FOR EACH STATEMENT
EXECUTE FUNCTION generate_log();

CREATE OR REPLACE TRIGGER generate_log_trigger
AFTER INSERT
ON "revision"
FOR EACH STATEMENT
EXECUTE FUNCTION generate_log();
