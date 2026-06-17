addM202Sections([
S(73, 's73', 'EFS', 'efs',
  def('EFS signifie Encrypting File System.')+
  h3('Rôle')+
  p('Chiffrer des fichiers au niveau NTFS.')+
  h3('Fonctionnement')+
  ul(['Utilise une clé symétrique FEK pour chiffrer les fichiers.','Protège la FEK avec un mécanisme asymétrique.'])+
  h3('Agent de récupération')+
  p('Permet de récupérer les fichiers si l\u2019utilisateur perd son certificat.')+
  piege(['EFS protège les fichiers, pas forcément tout le disque.','Agent de récupération recommandé. Le tableau de synthèse indique : EFS = chiffrement symétrique FEK + asymétrique pour protéger la FEK.','---'])
),
S(74, 's74', 'BitLocker', 'bitlocker',
  def('BitLocker chiffre un volume ou disque entier.')+
  h3('Rôle')+
  p('Protéger les données en cas de vol du disque ou de l\u2019ordinateur.')+
  h3('Différence avec EFS')+
  ul(['EFS chiffre des fichiers.','BitLocker chiffre le volume.'])+
  h3('TPM')+
  p('Module matériel permettant de stocker des clés de façon sécurisée.')+
  piege(['EFS = fichier.','BitLocker = disque/volume.','---'])
),
S(75, 's75', 'WDS', 'wds',
  def('WDS signifie Windows Deployment Services.')+
  h3('Rôle')+
  p('Déployer Windows sur des postes via le réseau.')+
  h3('Fonction')+
  ul(['Serveur PXE Microsoft.','Permet le démarrage réseau.','Déploie des images Windows.','Automatise l\u2019installation.'])+
  h3('Boot PXE')+
  ul(['DHCP.','TFTP.','Image de démarrage.','Image d\u2019installation.'])+
  h3('Images')+
  ul(['Image de démarrage.','Image d\u2019installation.','Image de capture.'])+
  h3('Sysprep')+
  ul(['Prépare un poste de référence avant capture.','Supprime les informations uniques comme SID et nom.','Obligatoire avant capture d\u2019image volumique.'])+
  h3('Fichier unattend')+
  ul(['Automatise les réponses d\u2019installation.','Réduit l\u2019intervention humaine.'])+
  h3('Multicast')+
  ul(['Permet de déployer une image vers plusieurs postes en même temps.','Nécessite support IGMP sur équipements réseau selon le support.'])+
  h3('Périphériques préinstallés')+
  ul(['Permettent de précréer un poste avec GUID/UUID.','Facilitent le nommage et la jonction domaine automatique.'])+
  h3('Pilotes')+
  ul(['WDS permet d\u2019injecter des pilotes.','Important pour carte réseau et stockage dans WinPE.'])+
  piege(['WDS + DHCP sur même serveur nécessite options DHCP Proxy selon synthèse M202.','---'])
),
S(76, 's76', 'Maintenance AD', 'maintenance ad',
  h3('Arrêter NTDS')+
  p('<code>net stop ntds</code>')+
  h3('Rôle')+
  p('Arrêter le service AD DS sans redémarrer en DSRM.')+
  h3('Services dépendants possibles')+
  ul(['DNS intégré.','KDC.','Réplication.','Services liés.'])+
  h3('DSRM')+
  ul(['Mode de restauration des services d\u2019annuaire.','Nécessite redémarrage en mode spécifique.','Utilisé pour restauration AD.'])+
  piege(['Arrêt NTDS à chaud ≠ DSRM.','---'])
),
S(77, 's77', 'Diagnostic AD', 'diagnostic ad',
  h3('dcdiag')+
  p('Diagnostic complet du contrôleur de domaine.')+
  h3('repadmin /showrepl')+
  p('Vérifie la réplication AD.')+
  h3('dcdiag /V /C /D /E')+
  p('Diagnostic détaillé sur l\u2019ensemble de l\u2019environnement.')+
  h3('gpotool')+
  p('Vérifie cohérence des GPO.')+
  h3('Observateur d\u2019événements')+
  ul(['Vérifie les journaux :','Directory Service ;','DNS Server ;','System ;','Security.'])+
  piege(['Avant migration ou mise à niveau, vérifier que l\u2019AD est sain.','---'])
),
S(78, 's78', 'Adprep', 'adprep',
  def('Adprep prépare la forêt ou le domaine pour une nouvelle version de Windows Server.')+
  h3('forestprep')+
  p('Met à jour le schéma de la forêt.')+
  h3('domainprep')+
  p('Prépare le domaine.')+
  h3('Contrôleur cible')+
  p('<code>adprep /forestprep</code> doit être exécuté sur le DC détenant le rôle Maître de schéma.')+
  h3('Irréversibilité')+
  p('La mise à jour du schéma est critique et difficile à annuler.')+
  piege(['Toujours sauvegarder et vérifier la réplication avant adprep.','---'])
),
S(79, 's79', 'Migration SYSVOL FRS vers DFSR', 'migration sysvol frs vers dfsr',
  h3('Contexte')+
  ul(['FRS est l\u2019ancien mécanisme de réplication SYSVOL.','DFSR est plus robuste.'])+
  h3('Outil')+
  p('<code>dfsrmig</code>')+
  h3('États')+
  h4('Prepared')+
  ul(['DFSR prépare une copie.','FRS reste actif.'])+
  h4('Redirected')+
  ul(['DFSR devient actif pour SYSVOL.','FRS n\u2019est plus utilisé par les clients.'])+
  h4('Eliminated')+
  ul(['FRS est supprimé.','DFSR devient le seul mécanisme.'])+
  h3('Commande')+
  p('<code>dfsrmig /setglobalstate &lt;n&gt;</code>')+
  piege(['Migration séquentielle.','Ne pas sauter les étapes sans vérifier l\u2019état.','---'])
),
S(80, 's80', 'PowerShell — logique d\u2019examen', 'powershell — logique d\u2019examen',
  h3('Verbe-Nom')+
  ul(['Les cmdlets PowerShell suivent souvent la forme :','<code>Get-...</code>','<code>New-...</code>','<code>Set-...</code>','<code>Add-...</code>','<code>Remove-...</code>','<code>Install-...</code>'])+
  h3('Verbes fréquents')+
  ul(['Get = afficher.','New = créer.','Set = modifier.','Add = ajouter.','Remove = supprimer.','Install = installer.','Enable = activer.','Disable = désactiver.','Rename = renommer.','Move = déplacer.'])+
  h3('Pipeline')+
  p('Le pipe <code>|</code> envoie la sortie d\u2019une commande vers l\u2019entrée d\u2019une autre.')+
  h4('Exemple logique')+
  ul(['Afficher puis sélectionner.','Afficher puis filtrer.','Afficher puis formater.'])+
  h3('Where-Object')+
  p('Filtre les objets.')+
  h3('Select-Object')+
  p('Sélectionne des propriétés.')+
  h3('Format-Table')+
  p('Affiche sous forme de tableau.')+
  piege(['PowerShell manipule des objets, pas seulement du texte.','---'])
),
S(81, 's81', 'Commandes PowerShell essentielles par thème', 'commandes powershell essentielles par thème',
  h3('Système')+
  ul(['<code>Restart-Computer</code>','<code>Stop-Computer</code>','<code>Rename-Computer</code>'])+
  h3('Réseau')+
  ul(['<code>Get-NetIPInterface</code>','<code>New-NetIPAddress</code>','<code>Set-DnsClientServerAddress</code>'])+
  h3('Domaine')+
  ul(['<code>Add-Computer</code>','<code>Install-WindowsFeature AD-Domain-Services</code>','<code>Install-ADDSForest</code>','<code>Install-ADDSDomainController</code>'])+
  h3('AD')+
  ul(['<code>New-ADUser</code>','<code>Set-ADUser</code>','<code>Remove-ADUser</code>','<code>New-ADGroup</code>','<code>Add-ADGroupMember</code>','<code>New-ADOrganizationalUnit</code>'])+
  h3('DNS')+
  ul(['<code>Install-WindowsFeature DNS</code>','<code>Add-DnsServerPrimaryZone</code>','<code>Add-DnsServerResourceRecordA</code>','<code>Add-DnsServerResourceRecordCName</code>','<code>Add-DnsServerResourceRecordMX</code>'])+
  h3('DHCP')+
  ul(['<code>Install-WindowsFeature DHCP</code>','<code>Add-DhcpServerInDC</code>','<code>Add-DhcpServerv4Scope</code>','<code>Set-DhcpServerv4OptionValue</code>','<code>Add-DhcpServerv4Reservation</code>'])+
  h3('GPO')+
  ul(['<code>New-GPO</code>','<code>New-GPLink</code>','<code>Remove-GPO</code>','<code>gpupdate /force</code>'])+
  h3('Fichiers')+
  ul(['<code>New-Item</code>','<code>New-SmbShare</code>','<code>Get-SmbShare</code>','<code>Set-Acl</code>'])
),
S(82, 's82', 'Mémo final Windows M202', 'mémo final windows m202',
  ul([
    'Windows Server = services réseau centralisés.',
    'Standard = peu virtualisé.',
    'Datacenter = forte virtualisation.',
    'Essentials = petite entreprise.',
    'Server Core = moins de GUI, plus sécurisé.',
    'Hyper-V = hyperviseur type 1.',
    'Génération 1 = BIOS.',
    'Génération 2 = UEFI + Secure Boot.',
    'VHDX = moderne, 64 To, plus résistant.',
    'Commutateur externe = réseau physique.',
    'Commutateur interne = VM + hôte.',
    'Commutateur privé = VM seulement.',
    'Checkpoint ≠ sauvegarde.',
    'Live Migration = migration à chaud.',
    'Server Manager = console classique.',
    'WAC = administration web moderne.',
    'AD DS = annuaire Microsoft.',
    'Forêt = frontière de sécurité.',
    'Domaine = limite administrative.',
    'OU = organisation + GPO + délégation.',
    'FSMO = 5 rôles.',
    'GC = recherche forêt + groupes universels.',
    'Site AD = topologie physique.',
    'RODC = DC lecture seule pour succursale.',
    'DSRM = mode restauration AD.',
    'DHCP = DORA.',
    'DHCP Failover = 2 serveurs max, IPv4.',
    'IPAM = gérer DHCP/DNS/adressage.',
    'DNS = noms vers IP.',
    'SRV = localisation services AD.',
    'Zone primaire = lecture/écriture.',
    'Zone secondaire = lecture seule.',
    'Stub = NS/SOA/A nécessaires.',
    'Scavenging = nettoyage dynamique.',
    'GPO = politiques utilisateurs/ordinateurs.',
    'LSDO = Local, Site, Domaine, OU.',
    'Dernière GPO appliquée = prioritaire.',
    'CSE = applique les paramètres GPO.',
    'ADMX = modèles.',
    'ADML = langue.',
    'Magasin central = cohérence ADMX.',
    'Partage + NTFS = plus restrictif gagne.',
    'ABE = masque ce qui n\u2019est pas autorisé.',
    'FSRM hard quota = bloque.',
    'FSRM soft quota = alerte.',
    'DFS Namespace = chemin logique.',
    'DFS Replication = réplication.',
    'RDC = seulement modifications.',
    'PKI = certificats.',
    'Racine hors ligne = bonne pratique.',
    'EFS = fichiers.',
    'BitLocker = disque.',
    'WDS = déploiement PXE.',
    'Sysprep = obligatoire avant capture.',
    'Boot PXE = DHCP → TFTP → image.'
  ])
),
S(83, 's83', 'Pièges d\u2019examen Windows', 'pièges d\u2019examen windows',
  piege([
    'Installer AD DS ne veut pas dire promouvoir DC.',
    'DNS est obligatoire pour AD.',
    'IP statique est obligatoire pour serveur d\u2019infrastructure.',
    'Forêt = frontière de sécurité, pas domaine.',
    'OU n\u2019est pas une frontière de sécurité.',
    'PDC Emulator est très important au quotidien.',
    'GC est nécessaire pour groupes universels.',
    'RODC ne stocke pas les mots de passe par défaut.',
    'Server Core est plus sécurisé mais sans GUI.',
    'On ne bascule pas simplement Core ↔ GUI après installation.',
    'Checkpoint Hyper-V n\u2019est pas une sauvegarde.',
    'Interne Hyper-V ≠ Privé.',
    'VHDX est préféré à VHD.',
    'DHCP doit être autorisé dans AD.',
    'DHCP failover = seulement 2 serveurs et IPv4.',
    'Réservation DHCP dépend de la MAC.',
    'Zone secondaire DNS = lecture seule.',
    'Stub zone ne contient pas toute la zone.',
    'SRV est critique pour AD.',
    'Les enregistrements statiques DNS ne sont pas nettoyés par scavenging.',
    'LSDO = ordre GPO.',
    'Dernière GPO appliquée gagne.',
    'Enforced peut passer malgré Block Inheritance.',
    'Stratégie = verrouille, préférence = propose.',
    'ADMX sans magasin central peut créer incohérence.',
    'Permission effective = la plus restrictive entre partage et NTFS.',
    'ABE masque seulement, ne sécurise pas à lui seul.',
    'VSS n\u2019est pas une vraie sauvegarde.',
    'Quota hard bloque, quota soft alerte.',
    'DFS Namespace ≠ DFS Replication.',
    'EFS chiffre fichier, BitLocker chiffre volume.',
    'Sysprep est obligatoire avant capture WDS.',
    'WDS sur même serveur que DHCP nécessite options adaptées.',
    'PowerShell utilise des objets, pas seulement du texte.',
    '---'
  ])
)
]);
