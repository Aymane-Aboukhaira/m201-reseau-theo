addM202Sections([
S(25, 's25', 'Catalogue Global', 'catalogue global',
  def('Le Catalogue Global est un contrôleur de domaine qui stocke : une copie complète des objets de son domaine ; une copie partielle des objets des autres domaines de la forêt.')+
  h3('Rôle')+
  ul(['Recherche dans toute la forêt.','Authentification multi-domaines.','Validation de l\u2019appartenance aux groupes universels.'])+
  h3('Si aucun GC disponible')+
  ul(['Problèmes d\u2019ouverture de session possibles.','Problèmes de recherche inter-domaines.','Authentification affectée dans une forêt multi-domaines.'])+
  h3('Modification des attributs GC')+
  ul(['Se fait via le schéma Active Directory.','On coche l\u2019option de réplication de l\u2019attribut dans le catalogue global.'])
),
S(26, 's26', 'Sites Active Directory', 'sites active directory',
  def('Un site AD représente la topologie physique du réseau.')+
  h3('Rôle')+
  ul(['Optimiser la réplication.','Optimiser l\u2019authentification.','Associer les clients au DC le plus proche.','Réduire le trafic WAN.'])+
  h3('Intrasite')+
  ul(['Réplication fréquente.','Rapide.','Non compressée.','Utilise RPC.'])+
  h3('Intersite')+
  ul(['Réplication planifiée.','Compressée.','Optimisée pour WAN.','Coût des liens pris en compte.'])+
  h3('ISTG')+
  ul(['Intersite Topology Generator.','DC élu dans un site.','Calcule la topologie de réplication intersite.'])+
  h3('Bridgehead Server')+
  ul(['Serveur tête de pont.','Concentre le trafic de réplication entre sites.'])+
  h3('Transport')+
  ul(['RPC sur IP recommandé.','SMTP possible mais ne réplique pas toutes les partitions.'])
),
S(27, 's27', 'Niveaux fonctionnels', 'niveaux fonctionnels',
  def('Les niveaux fonctionnels déterminent les fonctionnalités AD disponibles et les versions de DC autorisées.')+
  h3('Niveau domaine')+
  p('Affecte les fonctionnalités d\u2019un domaine.')+
  h3('Niveau forêt')+
  p('Affecte les fonctionnalités de toute la forêt.')+
  h3('Conséquence')+
  ul(['Une fois élevé, le niveau peut empêcher l\u2019ajout de DC plus anciens.','Le retour en arrière peut être impossible ou limité.'])+
  h3('Exemple')+
  p('Windows Server 2008 R2 introduit la Corbeille Active Directory.')+
  piege(['Toujours vérifier les versions de tous les DC avant d\u2019élever le niveau fonctionnel.','---'])
),
S(28, 's28', 'RODC', 'rodc',
  def('RODC signifie Read-Only Domain Controller. C\u2019est un contrôleur de domaine en lecture seule.')+
  h3('Rôle')+
  ul(['Fournir AD dans un site distant.','Limiter les risques si le serveur est physiquement peu sécurisé.'])+
  h3('Caractéristiques')+
  ul(['Base AD en lecture seule.','Ne stocke pas les mots de passe par défaut.','Peut utiliser une stratégie de réplication des mots de passe.','Permet délégation locale sans donner les droits AD complets.'])+
  h3('Cas d\u2019usage')+
  ul(['Succursale.','Agence distante.','Site sans administrateur qualifié.','Site avec sécurité physique faible.'])+
  h3('Prérequis')+
  ul(['Forêt au moins Windows Server 2003.','Au moins un DC en écriture disponible.','RODC supporté à partir de Windows Server 2008.'])+
  piege(['RODC ne remplace pas un DC en écriture dans le site principal.','---'])
),
S(29, 's29', 'Clonage d\u2019un contrôleur de domaine virtualisé', 'clonage d\u2019un contrôleur de domaine virtualisé',
  def('Le clonage permet de créer rapidement un nouveau DC virtuel à partir d\u2019un DC existant.')+
  h3('Fichier requis')+
  p('DCCloneConfig.xml.')+
  h3('Emplacement')+
  p('Répertoire de la base AD. Souvent <code>C:\\Windows\\NTDS</code>.')+
  h3('Rôle FSMO nécessaire')+
  ul(['Émulateur PDC disponible.','Doit supporter le clonage.'])+
  h3('Groupe requis')+
  p('Contrôleurs de domaine clonables.')+
  h3('Commandes importantes')+
  ul(['<code>Get-ADDCCloningExcludedApplicationList</code> — Analyse les applications non compatibles avec le clonage.','<code>New-ADDCCloneConfigFile</code> — Génère le fichier DCCloneConfig.xml.'])+
  piege(['Un DC n\u2019est pas clonable par défaut.','Il faut l\u2019autoriser explicitement.','---'])
),
S(30, 's30', 'Azure Active Directory', 'azure active directory',
  def('Azure AD est le service d\u2019identité cloud de Microsoft.')+
  h3('Rôle')+
  ul(['Gestion des identités cloud.','Authentification pour Microsoft 365 et services cloud.','SSO.','MFA.','Accès conditionnel.'])+
  h3('Différence avec AD DS')+
  ul(['AD DS = annuaire local basé domaine, LDAP, Kerberos, GPO.','Azure AD = identité cloud, OAuth, SAML, OpenID Connect, accès aux applications SaaS.'])+
  piege(['Azure AD ne remplace pas exactement AD DS local.','Les deux peuvent être synchronisés.','---'])
),
S(31, 's31', 'Prérequis de promotion d\u2019un contrôleur de domaine', 'prérequis de promotion d\u2019un contrôleur de domaine',
  h3('Prérequis')+
  ul(['Adresse IP statique.','Nom serveur définitif.','DNS fonctionnel.','Partition NTFS.','Mot de passe administrateur.','Espace disque suffisant.','Bonne configuration réseau.'])+
  h3('Pourquoi NTFS')+
  p('AD DS et SYSVOL nécessitent NTFS.')+
  h3('DNS')+
  p('Indispensable pour localiser les contrôleurs de domaine via enregistrements SRV.')+
  h3('DSRM')+
  ul(['Directory Services Restore Mode.','Mot de passe de restauration AD.','Utilisé en mode de dépannage, pas pour administration quotidienne.'])
),
S(32, 's32', 'Installation et promotion AD DS', 'installation et promotion ad ds',
  h3('Étapes générales')+
  ul(['Installer rôle AD DS.','Ajouter DNS si nécessaire.','Promouvoir le serveur.','Choisir nouvelle forêt, domaine enfant, arbre ou DC additionnel.','Configurer DSRM.','Vérifier prérequis.','Redémarrer.','Vérifier DNS et AD.'])+
  h3('Nouvelle forêt')+
  ul(['Crée une nouvelle forêt AD.','Crée un domaine racine.'])+
  h3('DC additionnel')+
  p('Ajoute un contrôleur dans un domaine existant.')+
  h3('Domaine enfant')+
  p('Crée un domaine sous un parent.')+
  h3('Nouvelle arborescence')+
  p('Crée un nouvel espace de noms DNS dans la même forêt.')
),
S(33, 's33', 'Commandes AD DS PowerShell', 'commandes ad ds powershell',
  h3('Installer AD DS')+
  p('<code>Install-WindowsFeature AD-Domain-Services -IncludeManagementTools</code>')+
  h3('Nouvelle forêt')+
  p('<code>Install-ADDSForest</code>')+
  h3('Contrôleur additionnel')+
  p('<code>Install-ADDSDomainController</code>')+
  h3('Domaine enfant')+
  p('<code>Install-ADDSDomain</code>')+
  h3('Nouvelle arborescence')+
  p('<code>Install-ADDSDomain</code>')+
  h3('Désinstaller / rétrograder')+
  p('<code>Uninstall-ADDSDomainController</code>')+
  h3('Module AD')+
  p('<code>Import-Module ActiveDirectory</code>')+
  piege(['Installer le rôle ne suffit pas.','Il faut ensuite promouvoir le serveur.','---'])
),
S(34, 's34', 'Vérification après promotion', 'vérification après promotion',
  h3('Consoles')+
  ul(['Utilisateurs et ordinateurs Active Directory.','DNS.','Sites et services Active Directory.','Observateur d\u2019événements.'])+
  h3('Commandes')+
  ul(['<code>dcdiag</code> — Diagnostic du contrôleur de domaine.','<code>repadmin /showrepl</code> — Vérifie la réplication.'])+
  h3('Vérifier')+
  ul(['Présence des enregistrements SRV.','Réplication.','SYSVOL.','DNS.','Événements Directory Service.','Connexion au domaine.'])
),
S(35, 's35', 'Rétrogradation d\u2019un contrôleur de domaine', 'rétrogradation d\u2019un contrôleur de domaine',
  def('La rétrogradation retire le rôle AD DS d\u2019un serveur.')+
  h3('Précautions')+
  ul(['Vérifier qu\u2019il ne détient pas des rôles FSMO critiques.','Transférer les rôles FSMO avant suppression si nécessaire.','Vérifier qu\u2019il reste d\u2019autres DC.','Vérifier réplication.','Définir un mot de passe administrateur local.'])+
  piege(['Si c\u2019est le dernier DC d\u2019un domaine, la suppression peut détruire le domaine.','---'])
),
S(36, 's36', 'Gestion des objets AD', 'gestion des objets ad',
  h3('Utilisateur')+
  p('Compte permettant à une personne de s\u2019authentifier.')+
  h3('Propriétés importantes')+
  ul(['Nom.','Prénom.','Nom d\u2019ouverture de session.','UPN.','Mot de passe.','Département.','Adresse mail.','Profil.','Groupes.'])+
  h3('Ordinateur')+
  p('Compte représentant une machine membre du domaine.')+
  h3('Groupe')+
  p('Regroupe des utilisateurs ou ordinateurs.')+
  h3('OU')+
  p('Organise les objets et permet l\u2019application de GPO.')
),
]);
