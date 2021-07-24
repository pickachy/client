import SitemapGenerator from 'sitemap-generator';

class Sitemap {
  isGenerating: boolean = false;
  generator: ReturnType<typeof SitemapGenerator>;

  constructor(host: string, fileLocation: string) {
    this.generator = SitemapGenerator(host, {
      filepath: fileLocation,
      stripQuerystring: true
    });
  }

  generate() {
    return new Promise<void>((resolve, reject) => {
      if (!this.isGenerating) {
        this.isGenerating = true;
        this.generator.on('done', () => {
          this.isGenerating = false;
          console.log('Sitemap generation finished successfully');
          resolve();
        });
        this.generator.on('error', (error) => {
          this.isGenerating = false;
          console.log(`Sitemap generation finished with error ${error.message}`);
          reject();
        });
        this.generator.start();
        console.log('Sitemap generation started');
      }
    });
  }
}

export class SitemapSingleton {
  private static sitemap?: Sitemap;

  public static getInstance(host: string, fileLocation: string): Sitemap {
    if (!this.sitemap) {
      this.sitemap = new Sitemap(host, fileLocation);
    }
    return this.sitemap;
  }
}
