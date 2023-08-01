LINKS = $(wildcard links/*)

site/_redirects: site $(LINKS)
	node src/generate.mjs $@ $(LINKS)

site:
	mkdir $@
