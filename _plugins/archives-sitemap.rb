# Keep tag and category archive pages (e.g. /blog/tag/medium/) out of
# sitemap.xml. They only repeat post lists, so they add thin pages to search
# results. jekyll-archives-v2 does not apply front matter defaults to the pages
# it generates, so set the flag here. This runs after the archives generator
# and before jekyll-sitemap, which uses the lowest priority.
module Jekyll
  class ArchivesSitemapExclude < Generator
    safe true
    priority :low

    def generate(site)
      site.pages.each do |page|
        next unless page.class.name == "Jekyll::ArchivesV2::Archive"
        next unless %w[tags categories].include?(page.type)

        page.data["sitemap"] = false
      end
    end
  end
end
