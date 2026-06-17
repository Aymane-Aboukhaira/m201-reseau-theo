addM202Sections([
S(49, 's49', 'DNS Windows Server', 'dns windows server',
  def('DNS traduit les noms en adresses IP.')+
  h3('Rôle')+
  ul(['Résolution de noms.','Localisation des services AD.','Publication des serveurs.','Résolution directe et inverse.'])+
  h3('Importance dans AD')+
  ul(['AD dépend fortement de DNS.','Les clients trouvent les DC grâce aux enregistrements SRV.'])+
  h3('Hiérarchie DNS')+
  ul(['Racine.','TLD.','Domaine.','Sous-domaines.','Zones.'])
),
S(50, 's50', 'Zones DNS', 'zones dns',
  h3('Zone primaire')+
  ul(['Lecture/écriture.','Zone principale.','Modifiable sur le serveur qui l\u2019héberge.'])+
  h3('Zone secondaire')+
  ul(['Copie en lecture seule d\u2019une zone primaire.','Utilisée pour redondance.','Mise à jour par transfert de zone.'])+
  h3('Zone intégrée AD')+
  ul(['Stockée dans Active Directory.','Répliquée via AD.','Sécurise les mises à jour dynamiques.'])+
  h3('Zone Stub')+
  p('Contient seulement les informations nécessaires pour localiser les serveurs autoritaires.')+
  h4('Contenu')+
  ul(['NS.','SOA.','A/AAAA glue records nécessaires.'])+
  h3('Zone de recherche inversée')+
  ul(['Résout IP → nom.','Contient des enregistrements PTR.'])+
  h3('Zone GlobalNames')+
  ul(['Zone spéciale pour résoudre des noms courts statiques.','Alternative partielle à WINS.','Ne remplace pas totalement WINS.','Réservée aux noms statiques importants.'])+
  piege(['Primaire = lecture/écriture.','Secondaire = lecture seule.','Stub = NS/SOA/A nécessaires seulement.','Zone intégrée AD = réplication AD.','---'])
),
S(51, 's51', 'Enregistrements DNS', 'enregistrements dns',
  h3('A')+
  p('Nom → IPv4.')+
  h3('AAAA')+
  p('Nom → IPv6.')+
  h3('CNAME')+
  p('Alias vers un nom canonique.')+
  h3('PTR')+
  p('IP → nom. Utilisé en zone inverse.')+
  h3('MX')+
  p('Serveur de messagerie.')+
  h3('NS')+
  p('Serveur DNS autoritaire.')+
  h3('SOA')+
  p('Informations principales de la zone.')+
  h3('SRV')+
  p('Localisation de services. Important pour Active Directory.')+
  piege(['AD utilise les SRV pour localiser LDAP, Kerberos et les DC.','---'])
),
S(52, 's52', 'Redirecteurs DNS', 'redirecteurs dns',
  h3('Redirecteur standard')+
  ul(['Transfère les requêtes hors zone vers un autre DNS.','Exemple : DNS du FAI.'])+
  h3('Redirecteur conditionnel')+
  ul(['Transfère selon le domaine demandé.','Exemple : requêtes pour <code>test.ma</code> vers un serveur spécifique.'])+
  h3('Résolution récursive')+
  p('Le serveur local délègue la résolution complète à un redirecteur.')+
  h3('Résolution itérative')+
  ul(['Le serveur local interroge successivement :','racine ;','TLD ;','serveur du domaine.'])+
  piege(['Récursive = quelqu\u2019un fait tout pour toi.','Itérative = le serveur local suit la chaîne DNS.','---'])
),
S(53, 's53', 'Scavenging DNS', 'scavenging dns',
  def('Nettoyage automatique des enregistrements DNS obsolètes.')+
  h3('Objectif')+
  ul(['Garder une base DNS propre.','Supprimer les enregistrements dynamiques périmés.'])+
  h3('Intervalles')+
  ul(['Intervalle de non-actualisation.','Intervalle d\u2019actualisation.'])+
  h3('Point important')+
  ul(['Les enregistrements statiques ont un horodatage à 0.','Ils ne sont pas supprimés automatiquement.','Seuls les enregistrements dynamiques horodatés peuvent être nettoyés.'])
),
S(54, 's54', 'Commandes PowerShell DNS', 'commandes powershell dns',
  h3('Installer DNS')+
  p('<code>Install-WindowsFeature DNS -IncludeManagementTools</code>')+
  h3('Zone primaire standard')+
  p('<code>Add-DnsServerPrimaryZone -Name ofppt.ma -ZoneFile ofppt.ma.dns</code>')+
  h3('Zone intégrée AD')+
  p('<code>Add-DnsServerPrimaryZone -Name ofppt.com -ReplicationScope Domain</code>')+
  h3('Zone inverse')+
  p('<code>Add-DnsServerPrimaryZone -NetworkId 172.18.0.0/16 -ZoneFile 18.172.in-addr.arpa.dns</code>')+
  h3('Zone secondaire')+
  p('<code>Add-DnsServerSecondaryZone -Name adatum.com -MasterServers 172.16.0.10 -ZoneFile adatum.com.dns</code>')+
  h3('Enregistrement A + PTR')+
  p('<code>Add-DnsServerResourceRecordA -ZoneName ofppt.ma -Name lon-client1 -IPv4Address 172.18.0.50 -CreatePtr</code>')+
  h3('Enregistrement AAAA')+
  p('<code>Add-DnsServerResourceRecordAAAA</code>')+
  h3('Enregistrement MX')+
  p('<code>Add-DnsServerResourceRecordMX</code>')+
  h3('Enregistrement CNAME')+
  p('<code>Add-DnsServerResourceRecordCName</code>')+
  h3('Enregistrement SRV')+
  p('<code>Add-DnsServerResourceRecord -Srv</code>')
),
S(55, 's55', 'GPO', 'gpo',
  def('GPO signifie Group Policy Object. C\u2019est un ensemble de paramètres appliqués aux utilisateurs et ordinateurs d\u2019un domaine.')+
  h3('Rôle')+
  ul(['Automatiser la configuration.','Renforcer la sécurité.','Standardiser les postes.','Déployer des paramètres.','Contrôler l\u2019environnement utilisateur.'])+
  h3('Cibles')+
  ul(['Ordinateurs.','Utilisateurs.'])+
  h3('Application')+
  p('Les GPO s\u2019appliquent selon les liens et l\u2019ordre d\u2019héritage.')
),
S(56, 's56', 'Ordre d\u2019application GPO', 'ordre d\u2019application gpo',
  h3('Mémo')+
  p('LSDO.')+
  h3('Ordre')+
  ul(['Local.','Site.','Domaine.','OU.'])+
  h3('Priorité')+
  ul(['La dernière GPO appliquée l\u2019emporte en cas de conflit.','La GPO de l\u2019OU la plus proche de l\u2019objet est prioritaire. Le support insiste sur LSDO et sur le fait que la dernière GPO appliquée gagne.'])+
  piege(['Local = priorité faible.','OU proche = priorité forte.','---'])
),
S(57, 's57', 'Héritage GPO', 'héritage gpo',
  h3('Héritage')+
  p('Une OU enfant hérite des GPO liées aux niveaux supérieurs.')+
  h3('Bloquer l\u2019héritage')+
  p('Empêche certaines GPO supérieures de s\u2019appliquer.')+
  h3('Enforcement / Appliqué')+
  p('Force une GPO à s\u2019appliquer malgré le blocage d\u2019héritage.')+
  piege(['Enforced peut contourner Block Inheritance.','---'])
),
S(58, 's58', 'Filtres GPO', 'filtres gpo',
  h3('Filtre de sécurité')+
  ul(['Contrôle quels utilisateurs ou ordinateurs appliquent la GPO.','Basé sur les permissions.'])+
  h3('Filtre WMI')+
  p('Applique la GPO selon une condition WMI.')+
  h4('Exemples')+
  ul(['Version OS.','Type ordinateur.','Architecture.','Mémoire.','Nom machine.'])+
  piege(['Filtre WMI trop lourd peut ralentir l\u2019ouverture de session.','---'])
),
S(59, 's59', 'CSE', 'cse',
  def('CSE signifie Client-Side Extension.')+
  h3('Rôle')+
  p('Composant côté client qui applique réellement les paramètres GPO.')+
  h3('Exemples')+
  ul(['Sécurité.','Registre.','Installation logicielle.','Scripts.','Redirection de dossiers.'])+
  h3('Point important')+
  p('La CSE de sécurité applique obligatoirement les modifications toutes les 16 heures même sans changement de GPO. Les autres CSE s\u2019appliquent surtout en cas de modification.')
),
S(60, 's60', 'ADMX / ADML', 'admx / adml',
  h3('ADMX')+
  ul(['Fichiers XML définissant les paramètres de stratégie.','Stockés localement dans :','<code>C:\\Windows\\PolicyDefinitions</code>'])+
  h3('ADML')+
  ul(['Fichiers de langue associés aux ADMX.','Contiennent les textes affichés dans GPMC.'])+
  h3('Magasin central')+
  p('Copie des fichiers ADMX/ADML dans SYSVOL.')+
  h4('Chemin')+
  p('<code>\\\\domaine\\SYSVOL\\domaine\\Policies\\PolicyDefinitions</code>')+
  h3('Rôle')+
  p('Assurer la cohérence des modèles d\u2019administration sur tous les DC.')+
  piege(['Sans magasin central, chaque DC peut utiliser ses propres fichiers ADMX locaux, ce qui peut créer des incohérences.','---'])
),
]);
