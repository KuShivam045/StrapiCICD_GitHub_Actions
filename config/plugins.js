module.exports = ({ env }) => ({
    "vercel-deploy": {
        enabled: true,
        config: {
            deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_AzBarDCJwEcSg17AXohPF782NPws/PdnfwzPQbI",
            apiToken: "TlKCPGXbyNGDDmQibMahKah4",
            appFilter: "sasonecicd",
            teamFilter: "team_2xNEDyYQRFELjfX0xYhR8oZV",
            roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
        },
    },
});