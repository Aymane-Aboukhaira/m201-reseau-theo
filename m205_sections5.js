addM205Sections([
S(53, 's53', 'Chiffrement asymétrique', 'chiffrement asymétrique',
  def('Utilise deux clés : clé publique ; clé privée.')+
  h3('Clé publique')+
  p('Peut être partagée.')+
  h3('Clé privée')+
  p('Doit rester secrète.')+
  h3('Usages')+
  ul(['Échange de clés.','Signature numérique.','Authentification.','Chiffrement de petits volumes.'])+
  h3('Exemple')+
  p('RSA.')+
  adv(['Résout le problème de distribution de clé.'])+
  inc(['Plus lent que le chiffrement symétrique.','---'])
),
S(54, 's54', 'Hash', 'hash',
  def('Fonction qui produit une empreinte fixe à partir de données.')+
  h3('Rôle')+
  p('Vérifier l’intégrité.')+
  h3('Propriétés attendues')+
  ul(['Sens unique.','Collision difficile.','Changement minime des données = hash différent.'])+
  h3('Exemples')+
  ul(['SHA.','MD5 ancien et faible.'])+
  h3('Différence hash / chiffrement')+
  ul(['Hash ne se déchiffre pas.','Chiffrement peut être déchiffré avec la clé.'])
),
S(55, 's55', 'Signature numérique', 'signature numérique',
  def('Mécanisme qui prouve l’origine et l’intégrité d’un message.')+
  h3('Fonctionnement simplifié')+
  ul(['On calcule un hash du message.','L’émetteur signe le hash avec sa clé privée.','Le destinataire vérifie avec la clé publique.','Si la vérification réussit, l’origine et l’intégrité sont validées.'])+
  h3('Services assurés')+
  ul(['Authentification de l’origine.','Intégrité.','Non-répudiation.'])+
  piege(['La signature numérique ne sert pas principalement à cacher le message.','Elle sert surtout à prouver et vérifier.','---'])
),
S(56, 's56', 'Certificats numériques et PKI', 'certificats numériques et pki',
  h3('Certificat numérique')+
  p('Document électronique liant une identité à une clé publique.')+
  h3('Contenu possible')+
  ul(['Identité du sujet.','Clé publique.','Autorité de certification.','Dates de validité.','Signature de l’autorité.'])+
  h3('PKI')+
  ul(['Public Key Infrastructure.','Infrastructure de gestion des clés et certificats.'])+
  h3('Autorité de certification')+
  ul(['Émet et signe les certificats.','Garantit le lien entre identité et clé publique.'])+
  h3('Utilité')+
  ul(['HTTPS.','VPN.','Signature électronique.','Authentification forte.'])
),
S(57, 's57', 'HTTPS', 'https',
  def('HTTP sécurisé avec TLS.')+
  h3('Services')+
  ul(['Confidentialité.','Intégrité.','Authentification du serveur.','Protection contre interception.'])+
  h3('Utilise')+
  ul(['Certificat numérique.','Chiffrement asymétrique pour établir la session.','Chiffrement symétrique pour les données.'])
),
S(58, 's58', 'Sécurité WLAN', 'sécurité wlan',
  h3('WEP')+
  ul(['Ancien.','Utilise RC4.','Très faible.','À éviter.'])+
  h3('WPA')+
  ul(['Améliore WEP.','Utilise TKIP.','Hérité.'])+
  h3('WPA2')+
  ul(['Utilise AES-CCMP.','Fort.','Très utilisé.'])+
  h3('WPA3')+
  ul(['Utilise SAE.','Très fort.','À privilégier.'])+
  h3('WPA2 Personal')+
  ul(['Utilise PSK.','Clé partagée.','Adapté aux petits réseaux.'])+
  h3('WPA2 Enterprise')+
  ul(['Utilise 802.1X et RADIUS.','Authentification individuelle.','Adapté aux entreprises.'])+
  h3('Menaces Wi-Fi')+
  ul(['Rogue AP.','Evil Twin.','Sniffing.','DoS radio.','Interception de données.'])+
  h3('Mesures simples WLAN')+
  ul(['Utiliser WPA2/WPA3.','Changer le mot de passe par défaut.','Désactiver WPS si inutile.','Utiliser 802.1X en entreprise.','Choisir de bons canaux.','Mettre à jour les AP.','Segmenter le Wi-Fi invité.'])
),
S(59, 's59', 'RADIUS dans WLAN', 'radius dans wlan',
  h3('Rôle')+
  p('Authentification centralisée des utilisateurs Wi-Fi.')+
  h3('Utilisé avec')+
  ul(['WPA2 Enterprise.','WPA3 Enterprise.','802.1X.'])+
  h3('Chemin')+
  p('Client → AP → WLC → RADIUS.')+
  adv(['Chaque utilisateur a son identité.','Révocation simple.','Traçabilité.','Sécurité supérieure au mot de passe partagé.','---'])
),
S(60, 's60', 'Cadre juridique et cybersécurité au Maroc', 'cadre juridique et cybersécurité au maroc',
  h3('Cyberespace')+
  p('Espace formé par les systèmes informatiques, réseaux, données, services numériques et communications électroniques.')+
  h3('Criminalité informatique')+
  p('Tout acte illégal lié à l’informatique.')+
  h3('Cybercriminalité')+
  ul(['Variante de la criminalité informatique qui s’exprime à travers les réseaux de télécommunication.','C’est un sous-ensemble de la criminalité informatique.'])+
  h3('DGSSI')+
  p('Direction Générale de la Sécurité des Systèmes d’Information.')+
  h4('Rôle')+
  ul(['Sécurité des SI des administrations.','Veille technologique.','Coordination technique.','Rattachée à la Défense nationale selon le support.'])+
  h3('CNDP')+
  p('Commission Nationale de Contrôle de la Protection des Données à caractère Personnel.')+
  h4('Rôle')+
  ul(['Protection des données personnelles.','Contrôle de la licéité des traitements.','Protection de la vie privée.'])+
  h3('maCERT')+
  p('Moroccan Computer Emergency Response Team.')+
  h4('Rôle')+
  ul(['Veille.','Détection.','Réponse aux attaques informatiques.','Coordination nationale des incidents.'])
),
S(61, 's61', 'Lois marocaines citées', 'lois marocaines citées',
  h3('Loi 43-20')+
  ul(['Services de confiance pour les transactions électroniques.','Concerne :','cryptologie ;','signature électronique ;','certificats.'])+
  h3('Loi 05-20')+
  ul(['Cybersécurité.','Cadre juridique pour la sécurité des SI des administrations et infrastructures vitales.'])+
  h3('Loi 09-08')+
  p('Protection des personnes physiques à l’égard du traitement des données à caractère personnel.')+
  h3('Loi 07-03')+
  p('Complète le code pénal sur les infractions relatives aux STAD.')+
  h4('STAD')+
  p('Systèmes de Traitement Automatisé de Données.')+
  h3('Loi 53-05')+
  ul(['Échange électronique de données juridiques.','Concerne aussi cryptographie, signature électronique et certification.'])+
  h3('Loi 24-96')+
  p('Poste et télécommunications.')+
  h3('Loi 31-08')+
  p('Protection du consommateur, y compris en ligne.')
),
S(62, 's62', 'Infractions et sanctions citées', 'infractions et sanctions citées',
  h3('Fausses déclarations à un prestataire de confiance')+
  ul(['Article 65 Loi 43-20.','Sanction citée : 1 à 5 ans + 100 000 à 500 000 DH.'])+
  h3('Traitement illégal de données personnelles')+
  ul(['Article 56 Loi 09-08.','Sanction citée : 3 mois à 1 an + 2 000 à 200 000 DH.'])+
  h3('Interruption volontaire des télécommunications')+
  ul(['Article 84 Loi 24-96.','Sanction citée : 1 mois à 2 ans + 10 000 à 200 000 DH.'])+
  h3('Accès frauduleux à un STAD')+
  ul(['Article 607-3 Loi 07-03.','Sanction citée : 1 mois à 3 mois + 2 000 à 10 000 DH.'])+
  h3('Falsification de documents informatisés')+
  ul(['Article 607-7 Loi 07-03.','Sanction citée : 1 à 5 ans + 10 000 à 1 000 000 DH.'])
),
S(63, 's63', 'Logs et audit', 'logs et audit',
  h3('Journalisation')+
  p('Enregistrement des événements système et sécurité.')+
  h3('Rôle')+
  ul(['Détecter les incidents.','Comprendre une panne.','Prouver une action.','Aider l’audit.','Alimenter SIEM.'])+
  h3('Logs importants')+
  ul(['Authentification réussie.','Échec d’authentification.','Accès administrateur.','Modification de configuration.','Connexion VPN.','Blocage firewall.','Alerte IDS/IPS.'])+
  h3('Sentier d’audit')+
  p('Trace chronologique permettant de reconstruire les actions.')+
  h3('Lien avec non-répudiation')+
  p('Les logs aident à prouver qu’une action a été réalisée par une entité donnée.')
),
S(64, 's64', 'Contrôle des comptes privilégiés', 'contrôle des comptes privilégiés',
  h3('Compte privilégié')+
  p('Compte ayant des droits élevés.')+
  h4('Exemples')+
  ul(['Administrateur domaine.','Root.','Administrateur réseau.','Compte de service critique.'])+
  h3('Risque')+
  p('Si compromis, l’attaquant contrôle une grande partie du SI.')+
  h3('Bonnes pratiques')+
  ul(['Identifier tous les comptes privilégiés.','Limiter leur nombre.','Appliquer MFA.','Faire rotation des mots de passe.','Journaliser leur utilisation.','Utiliser le moindre privilège.','Séparer comptes utilisateur et comptes admin.'])
),
S(65, 's65', 'Sauvegarde et récupération', 'sauvegarde et récupération',
  h3('Objectif')+
  p('Réduire l’impact d’un incident.')+
  h3('Protège contre')+
  ul(['Ransomware.','Suppression accidentelle.','Panne disque.','Corruption.','Erreur humaine.','Sinistre.'])+
  h3('Bonnes pratiques')+
  ul(['Sauvegardes régulières.','Copies hors ligne.','Copies externalisées.','Tests de restauration.','Protection contre modification.','Plan de reprise.'])+
  piege(['Une sauvegarde non testée n’est pas fiable.','---'])
),
]);
