module.exports = {
  apps : [{
    name: "mi-node-app",
    script: "./dist/index.js",
    instances: "max",
    exec_mode: "cluster",

    env_production: {
      NODE_ENV: "production",
      PORT: 3000,
      DB_HOST: "://amazonaws.com",
      DB_USER: "db_admin",
      DB_PASS: "password_seguro_de_base_de_datos"
    },

    error_file: "/var/www/tu-app/shared/logs/err.log",
    out_file: "/var/www/tu-app/shared/logs/out.log",
    log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    merge_logs: true
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '34.194.229.210',
      ref : 'origin/main',
      repo : 'git@github.com:gvidal95/master-dpa-backend.git',
      path : '/var/www/tu-app',
      'post-deploy' : 'mkdir -p /var/www/tu-app/shared/logs && npm ci && npm run build && pm2 reload ecosystem.config.cjs --env production && pm2 save',
      ssh_options: "IdentityFile=~/.ssh/claveIngreso.pem "
    }
  }
};