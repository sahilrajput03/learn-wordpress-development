# Wordpress Development

- **❤️Learn WordPress Doc: [Click here](https://docs.google.com/document/d/16GdXBSDFBl1T9A_SJa1ITBGB1VBN0aAQ-VAoBpyEcXM/edit?tab=t.0)**
- Source: Setting Up Your Local Development Environment for WordPress: [Click here](https://wordpress.com/blog/2022/11/14/setting-up-your-local-development-environment-for-wordpress/)
- Todo:
  - You can enable watch mode as its suggested in terminal (bottom) when you run `docker compose up` command to start wordpress server.
  - Checkout WordPress Studio: **Github:** [github.com/Automattic/studio](https://github.com/Automattic/studio) (243\*)
    - Dowload and Install Info: [Click here](https://developer.wordpress.com/studio)
    - Meet Studio by WordPress.com—a fast, free way to develop locally with WordPress. Share your local sites with clients or colleagues, sync with production sites, and keep your local development process smooth and simple—with unbreakable infrastructure behind the scenes.
- Learn:
  - `wp-config.php` file has your credentials which are passed form `docker-compose.yml` file. (Sample file - `wp-config-sample.php`)
  - WordPress Version: Note I have set `wordpress:latest` in `docker-compose.yml` file and when I checked wordpress verison from admin panel (in site) I saw version as `6.7.2`

```bash
docker compose up
```

**Info:**

```txt
Site Title - MySite1
Username - sahilrajput03
Password - 2rCTcbKWYd*(4IShzz
```

**Other Tools to develop wordpress locally:**

- https://instantwp.com/
- Reddit - Easy way top install WordPress locally without auto-installers? [Click here](https://www.reddit.com/r/Wordpress/comments/1d2p8n7/easy_way_top_install_wordpress_locally_without/)

## ❤️ Adding custom css via file in vscode for better css editing experience

**How did I do this?** I found the .css files used by site by searching for `.css` in the browser inspect window in the html markup to know which .css files are loaded. Then I checked with chatgpt to add a new css file to the theme and I found below method and it works. 🎉

File:

- Your custom css file: `file://./wordpress/wp-content/themes/twentytwentyfive/styles-custom1.css`

I added this custom css file to twenty-twenty-five theme folder by adding below code to `file://./wordpress/wp-content/themes/twentytwentyfive/functions.php` file:

```js
// Custom Css by Sahil
function custom_enqueue_styles() {
  wp_enqueue_style(
    'custom-style',
    get_parent_theme_file_uri( 'styles-custom1.css' ),
    array(),
    wp_get_theme()->get( 'Version' )
  );
}
add_action('wp_enqueue_scripts', 'custom_enqueue_styles');
```

and

```css
/* File: wordpress/wp-content/themes/twentytwentyfive/styles-custom1.css */
.myclass {
  color: red;
  background: yellow;
}
```

Testing your custom css: Edit some div element in html markup and add class `myclass` to it.

Thanks.
