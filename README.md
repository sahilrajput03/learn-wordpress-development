# Wordpress Development

Source: Setting Up Your Local Development Environment for WordPress: [Click here](https://wordpress.com/blog/2022/11/14/setting-up-your-local-development-environment-for-wordpress/)

- Todo:
  - Checkout WordPress Studio: **Github:** [github.com/Automattic/studio](https://github.com/Automattic/studio)
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
