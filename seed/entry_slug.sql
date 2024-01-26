ALTER TABLE entry DROP COLUMN IF EXISTS "slug";
ALTER TABLE entry ADD COLUMN "slug" VARCHAR(255) DEFAULT NULL;

-- slugify function is from kdobson.net/2019/ultimate-postgresql-slug-function
CREATE EXTENSION IF NOT EXISTS "unaccent";

CREATE OR REPLACE FUNCTION slugify("value" TEXT)
RETURNS TEXT AS $$
  -- removes accents (diacritic signs) from a given string --
  WITH "unaccented" AS (
    SELECT unaccent("value") AS "value"
  ),
  -- lowercases the string
  "lowercase" AS (
    SELECT lower("value") AS "value"
    FROM "unaccented"
  ),
  -- remove single and double quotes
  "removed_quotes" AS (
    SELECT regexp_replace("value", '[''"]+', '', 'gi') AS "value"
    FROM "lowercase"
  ),
  -- replaces anything that's not a letter, number, hyphen('-'), or underscore('_') with a hyphen('-')
  "hyphenated" AS (
    SELECT regexp_replace("value", '[^a-z0-9\\-_]+', '-', 'gi') AS "value"
    FROM "removed_quotes"
  ),
  -- trims hyphens('-') if they exist on the head or tail of the string
  "trimmed" AS (
    SELECT regexp_replace(regexp_replace("value", '\-+$', ''), '^\-', '') AS "value"
    FROM "hyphenated"
  )
  SELECT "value" FROM "trimmed";
$$ LANGUAGE SQL STRICT IMMUTABLE;

-- modify slug for existing entries
UPDATE entry
	SET slug = slugify(entry.title);

-- trigger function, sets slug of newly inserted entry to a slugified title.
CREATE OR REPLACE FUNCTION generate_slug()
  RETURNS TRIGGER 
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
	NEW.slug = slugify(NEW.title);
	return NEW;
END;
$$;

-- trigger, runs generate_slug on inserts to the entry table.
CREATE OR REPLACE TRIGGER slug_on_insert
   BEFORE INSERT
   ON entry
   FOR EACH ROW
       EXECUTE PROCEDURE generate_slug();