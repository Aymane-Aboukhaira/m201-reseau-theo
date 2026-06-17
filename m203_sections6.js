addM203Sections([
S(46, 's46', 'Segmentation SD-Access', 'segmentation sd-access',
  h3('Objectif')+
  ul(['Limiter les communications inutiles.','Isoler les groupes d\u2019utilisateurs.','Appliquer des politiques selon l\u2019identité.'])+
  h3('Types de séparation')+
  ul(['VRF.','Groupes de sécurité.','Politiques d\u2019accès.','Identité utilisateur.','VLAN selon contexte.','Overlay fabric.'])+
  h3('Exemple')+
  ul(['Invité ne peut accéder qu\u2019à Internet.','Finance peut accéder aux serveurs comptables.','IoT ne peut pas accéder aux postes utilisateurs.'])
),
S(47, 's47', 'SD-Access vs réseau campus traditionnel', 'sd-access vs réseau campus traditionnel',
  h3('Campus traditionnel')+
  ul(['VLANs.','ACLs manuelles.','Configuration switch par switch.','Segmentation plus lourde.','Mobilité utilisateur difficile.'])+
  h3('SD-Access')+
  ul(['Politiques centralisées.','Segmentation par identité.','Automatisation.','Fabric overlay.','Mobilité simplifiée.'])+
  piege(['SD-Access n\u2019est pas seulement “VLAN automatique”. C\u2019est une architecture complète de campus programmable.','---'])
),
S(48, 's48', 'Migration vers SDN', 'migration vers sdn',
  h3('Pourquoi progressive')+
  ul(['Une entreprise ne remplace pas tout son réseau directement.','Elle doit tester la compatibilité.','Elle doit éviter les interruptions.','Elle doit intégrer l\u2019existant.','Elle doit former l\u2019équipe.'])+
  h3('Étapes de migration')+
  ul(['Audit.','POC.','Pilot.','Déploiement.','Optimisation.'])+
  p('La banque de questions SDN liste ces points de migration comme questions à maîtriser : migration progressive, POC, Pilot et cinq étapes de migration vers SDN.')
),
S(49, 's49', 'Audit', 'audit',
  def('Analyse de l\u2019infrastructure existante.')+
  h3('Vérifier')+
  p('Équipements. Versions logicielles. Protocoles. Topologie. Applications critiques. Contraintes métier. Compatibilité SDN. Sécurité. Besoins d\u2019automatisation.')+
  h3('Objectif')+
  ul(['Savoir ce qui peut migrer.','Identifier les risques.','Préparer la stratégie.'])
),
S(50, 's50', 'POC', 'poc',
  def('Proof of Concept. Test limité dans un environnement de laboratoire.')+
  h3('Rôle')+
  ul(['Valider la technologie.','Tester les fonctions.','Tester l\u2019intégration.','Réduire les risques.','Former l\u2019équipe.'])+
  piege(['POC n\u2019est pas encore production.','---'])
),
S(51, 's51', 'Pilot', 'pilot',
  def('Déploiement limité dans une partie réelle du réseau.')+
  h3('Rôle')+
  ul(['Tester en conditions réelles.','Mesurer performance.','Valider sécurité.','Vérifier support utilisateur.','Préparer généralisation.'])+
  h3('Exemple')+
  ul(['Un bâtiment.','Une agence.','Un VLAN.','Un petit groupe d\u2019utilisateurs.'])
),
S(52, 's52', 'Déploiement', 'déploiement',
  def('Extension de la solution SDN à une plus grande partie du réseau.')+
  h3('Actions')+
  ul(['Appliquer les politiques.','Migrer progressivement les sites.','Superviser.','Documenter.','Former les équipes.','Prévoir rollback.'])
),
S(53, 's53', 'Optimisation', 'optimisation',
  def('Phase d\u2019amélioration après déploiement.')+
  h3('Objectifs')+
  ul(['Améliorer performances.','Corriger anomalies.','Optimiser chemins.','Ajuster politiques.','Réduire coûts.','Renforcer sécurité.','Automatiser davantage.'])
),
S(54, 's54', 'Sécurité SDN', 'sécurité sdn',
  h3('Avantages sécurité')+
  ul(['Politiques centralisées.','Réaction rapide.','Segmentation dynamique.','Visibilité globale.','Automatisation des blocages.'])+
  h3('Risques sécurité')+
  ul(['Contrôleur compromis.','API mal protégée.','Mauvaise authentification.','Règles trop permissives.','Canal contrôleur-switch non sécurisé.','Erreur de politique globale.'])+
  h3('Mesures')+
  ul(['Authentification forte.','RBAC.','HTTPS/TLS pour API.','Journalisation.','Redondance contrôleur.','Sauvegarde configurations.','Segmentation.','Mise à jour contrôleur.','Limitation des accès API.'])+
  piege(['SDN peut améliorer la sécurité, mais le contrôleur devient un élément critique à protéger.','---'])
)
]);
