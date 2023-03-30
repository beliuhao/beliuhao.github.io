<h1 align="center">
  Personal Blog of Herman Powered by Gatsby
</h1>

## 🚀 Quick start

1.  **Start developing.**

    Navigate into the project’s directory and start it up.

    ```shell
    cd [reponame]/
    gatsby develop
    # or run `npm run start`
    ```

2.  **Open the code and start customizing!**

    Your site is now running at `http://localhost:8000`!

    To get started, check out the guide to [using the Gatsby blog theme starter](https://gatsbyjs.org/docs/themes/using-a-gatsby-theme), or the longer, [more detailed tutorial](https://gatsbyjs.org/tutorial/using-a-theme).

## 🧐 What's inside?

Here are the top-level files and directories you'll see in a site created using the blog theme starter:

```text
Beliuhao
.
├── content
│   ├── assets
│   │   └── avatar.png
│   └── posts
│       └── 2020-03-27-hello-world.mdx
├── gatsby-config.js
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── src
│   └── gatsby-theme-blog
│       ├── components
│       │   └── bio-content.js
│       └── gatsby-plugin-theme-ui
│           └── colors.js
└── yarn.lock
```

1.  **`/content`**: A content folder holding assets that the theme expects to exist. This will vary from theme to theme -- this starter is set up to get you started with the blog theme, which expects an image asset for your avatar, and blog post content. Replace the avatar image file, delete the demo posts, and add your own!

2.  **`/src`**: You will probably want to customize your site to personalize it. The files under `/src/gatsby-theme-blog` _shadow_, or override, the files of the same name in the `gatsby-theme-blog` package. To learn more about this, check out the [guide to getting started with using the blog theme starter](https://gatsbyjs.org/docs/themes/using-a-gatsby-theme).

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This file tells [Prettier](https://prettier.io/) which configuration it should use to lint files.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. When using themes, it's where you'll include the theme plugin, and any customization options the theme provides.

6.  **`LICENSE`**: Gatsby is licensed under the MIT license.

7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/).

Here are some places to start:

### Themes

- To learn more about Gatsby themes specifically, we recommend checking out the [theme docs](https://www.gatsbyjs.org/docs/themes/).

### General

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Reference Guides_ and _Gatsby API_ sections in the sidebar.

## Update and Deployment

### Update

Do CRUD operations on files under `./content/notes/` and `./content/posts/` for creating new, reading, updating, and deleting.

### Deployment

- For `gitlab` and `netlify`, the `source` branch is used for the `CI/CD`. So each push to the `source` branch can trigger an automatic `CI/CD` job for deployment.
- For `github`, the `master` branch is used for the `CI/CD`. So under the latest `source` branch, run `npm run deploy` to generate the latest static files and automatically push to the `master` branch for deployment.

Assuming that `git remote -v` can print out the following information:

```bash
git remote -v

all     git@github.com:beliuhao/beliuhao.github.io.git (fetch)
all     git@github.com:beliuhao/beliuhao.github.io.git (push)
all     git@gitlab.com:beliuhao/beliuhao.gitlab.io.git (push)
gitlab  git@gitlab.com:beliuhao/beliuhao.gitlab.io.git (fetch)
gitlab  git@gitlab.com:beliuhao/beliuhao.gitlab.io.git (push)
origin  git@github.com:beliuhao/beliuhao.github.io.git (fetch)
origin  git@github.com:beliuhao/beliuhao.github.io.git (push)
```

Then, the following commands can be used for deployment:

```bash
git checkout source
# update the contents of the repository
git add .
git commit -m "Updated the contents of the repository"

# Push updates of the source branch to all repositories
# Which also means automatic deployment to Gitlab and Netlify
git push all source

# Deploy to GitHub
# Under the source branch, execute the following command
npm run deploy
```
