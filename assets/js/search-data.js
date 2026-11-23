// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blogs",
          title: "Blogs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-certifications",
          title: "Certifications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/certifications/";
          },
        },{id: "nav-photos",
          title: "Photos",
          description: "Simple snaps of places, moods, and everyday moments.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "post-from-route-53-to-hostinger-moving-an-aws-app-to-a-new-domain-without-moving-dns",
        
          title: 'From Route 53 to Hostinger: Moving an AWS App to a New Domain... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://putusintias.medium.com/from-route-53-to-hostinger-moving-an-aws-app-to-a-new-domain-without-moving-dns-5d16d225226f?source=rss-203656bbca17------2", "_blank");
          
        },
      },{id: "post-my-first-opensuse-asia-summit-container-observability-on-opensuse-tumbleweed",
        
          title: 'My First openSUSE.Asia Summit: Container Observability on openSUSE Tumbleweed <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://putusintias.medium.com/my-first-opensuse-asia-summit-container-observability-on-opensuse-tumbleweed-756298aec86f?source=rss-203656bbca17------2", "_blank");
          
        },
      },{id: "post-when-the-same-version-isn-t-setting-up-my-first-mobile-ci-cd-pipeline",
        
          title: 'When “The Same Version” Isn’t: Setting Up My First Mobile CI/CD Pipeline <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://putusintias.medium.com/when-the-same-version-isnt-setting-up-my-first-mobile-ci-cd-pipeline-8d68962da62f?source=rss-203656bbca17------2", "_blank");
          
        },
      },{id: "post-downsizing-infra-when-the-idr-drops-why-just-turn-off-idle-resources-isn-t-the-whole-story",
        
          title: 'Downsizing Infra When the IDR Drops: Why “Just Turn Off Idle Resources” Isn’t... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://putusintias.medium.com/downsizing-infra-when-the-idr-drops-why-just-turn-off-idle-resources-isnt-the-whole-story-2cd3691685fb?source=rss-203656bbca17------2", "_blank");
          
        },
      },{id: "post-knowledge-and-experience-don-t-always-live-where-you-do",
        
          title: 'Knowledge and Experience Don’t Always Live Where You Do <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://putusintias.medium.com/knowledge-and-experience-dont-always-live-where-you-do-0f1dd8380735?source=rss-203656bbca17------2", "_blank");
          
        },
      },{id: "post-how-i-nailed-my-first-three-it-workshops",
        
          title: 'How I Nailed My First Three IT Workshops <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://putusintias.medium.com/how-i-nailed-my-first-three-it-workshops-812a21327dbe?source=rss-203656bbca17------2", "_blank");
          
        },
      },{id: "post-dokploy-vs-coolify-real-world-comparison-on-a-fresh-ec2-instance",
        
          title: 'Dokploy vs Coolify: Real-World Comparison on a Fresh EC2 Instance <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.zero-one-group.com/dokploy-vs-coolify-real-world-comparison-on-a-fresh-ec2-instance-eab584ceabc6?source=rss-203656bbca17------2", "_blank");
          
        },
      },{id: "post-my-favourite-aws-cli-lifehack-profile-switching-with-oh-my-zsh",
        
          title: 'My Favourite AWS CLI Lifehack: Profile Switching with Oh My Zsh <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://putusintias.medium.com/my-favourite-aws-cli-lifehack-profile-switching-with-oh-my-zsh-59d27a6464d6?source=rss-203656bbca17------2", "_blank");
          
        },
      },{id: "post-your-journey-to-the-cloud-starting-with-linux-and-building-simple-apis",
        
          title: 'Your journey to the cloud: Starting with Linux and Building Simple APIs <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://putusintias.medium.com/your-journey-to-the-cloud-starting-with-linux-and-building-simple-apis-4376ede96566?source=rss-203656bbca17------2", "_blank");
          
        },
      },{id: "post-bangkit-story-week-2",
        
          title: 'Bangkit Story — Week 2 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://putusintias.medium.com/bangkit-story-week-2-d8cfe71dffcb?source=rss-203656bbca17------2", "_blank");
          
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sintiasnn", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/nptsintias", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@putusintias", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/putusintia", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://linktr.ee/putusintia", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
