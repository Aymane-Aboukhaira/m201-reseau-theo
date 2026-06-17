addM202Sections([
S(61, 's61', 'Préférences de stratégies de groupe', 'préférences de stratégies de groupe',
  def('Les préférences offrent des paramètres étendus.')+
  h3('Exemples')+
  ul(['Lecteurs mappés.','Imprimantes.','Dossiers.','Fichiers.','Tâches planifiées.','Registre.'])+
  h3('Différence stratégies / préférences')+
  h4('Stratégies')+
  ul(['Paramètre verrouillé.','L\u2019utilisateur ne peut pas le modifier.'])+
  h4('Préférences')+
  ul(['Paramètre proposé.','L\u2019utilisateur peut parfois le modifier.','La GPO peut le repositionner plus tard.'])+
  h3('Item-Level Targeting')+
  p('Permet de cibler finement une préférence.')
),
S(62, 's62', 'GPO Starter', 'gpo starter',
  def('Modèle de base pour créer de nouvelles GPO.')+
  h3('Contenu')+
  p('Uniquement paramètres des modèles d\u2019administration.')+
  h3('Export')+
  p('Exportable en fichier <code>.cab</code>.')+
  h3('Rôle')+
  p('Standardiser la création de GPO.')
),
S(63, 's63', 'Commandes PowerShell GPO', 'commandes powershell gpo',
  h3('Créer une GPO')+
  p('<code>New-GPO -Name "cmd"</code>')+
  h3('Lier une GPO')+
  p('<code>New-GPLink -Name "cmd" -Target "OU=TRI,DC=ntic,DC=ma" -LinkEnabled Yes</code>')+
  h3('Renommer une GPO')+
  p('<code>Rename-GPO</code>')+
  h3('Supprimer un lien GPO')+
  p('<code>Remove-GPLink</code>')+
  h3('Supprimer une GPO')+
  p('<code>Remove-GPO</code>')+
  h3('Forcer mise à jour')+
  p('<code>gpupdate /force</code>')+
  h3('Créer dossier de redirection')+
  p('<code>New-Item -Path "C:\\Redirect" -ItemType Directory</code>')+
  h3('Créer partage')+
  p('<code>New-SmbShare</code>')
),
S(64, 's64', 'Serveur de fichiers', 'serveur de fichiers',
  def('Un serveur de fichiers centralise le stockage et le partage des données.')+
  h3('Rôle')+
  ul(['Partager des dossiers.','Contrôler les accès.','Centraliser les données.','Faciliter sauvegarde.','Appliquer quotas.','Auditer l\u2019utilisation.'])+
  h3('Partage SMB')+
  ul(['Permet l\u2019accès réseau aux dossiers.','Utilisé par les clients Windows.'])+
  h3('Chemin UNC')+
  p('Format : <code>\\\\serveur\\partage</code>')
),
S(65, 's65', 'Autorisations partage et NTFS', 'autorisations partage et ntfs',
  h3('Autorisations de partage')+
  ul(['S\u2019appliquent à l\u2019accès réseau.','Exemples : Read ; Change ; Full Control.'])+
  h3('Autorisations NTFS')+
  p('S\u2019appliquent au système de fichiers local et réseau.')+
  h4('Exemples')+
  ul(['Read.','Write.','Modify.','Full Control.','List Folder.','Read & Execute.'])+
  h3('Règle finale')+
  p('Permission effective = combinaison la plus restrictive entre partage et NTFS.')+
  h3('Héritage NTFS')+
  p('Les permissions peuvent être héritées du dossier parent.')+
  piege(['Partage Full Control + NTFS Read = accès effectif Read.','Toujours vérifier les deux niveaux.','---'])
),
S(66, 's66', 'ABE', 'abe',
  def('ABE signifie Access-Based Enumeration.')+
  h3('Rôle')+
  p('Masquer les dossiers auxquels l\u2019utilisateur n\u2019a pas accès.')+
  adv(['Améliore la confidentialité.','Simplifie l\u2019affichage utilisateur.','Réduit les tentatives d\u2019accès.','---'])+
  piege(['ABE masque l\u2019affichage.','ABE ne remplace pas les permissions NTFS.','---'])
),
S(67, 's67', 'Espaces de stockage', 'espaces de stockage',
  def('Fonction Windows permettant de regrouper plusieurs disques physiques dans un pool.')+
  h3('Rôle')+
  ul(['Créer du stockage flexible.','Améliorer la résilience.','Simplifier la gestion.'])+
  h3('Types de résilience')+
  ul(['Simple.','Miroir.','Parité.'])+
  h3('Simple')+
  ul(['Pas de redondance.','Performance et capacité.','Risque de perte si disque tombe.'])+
  h3('Miroir')+
  ul(['Copie les données.','Résilience meilleure.','Capacité utilisable réduite.'])+
  h3('Parité')+
  ul(['Utilise informations de parité.','Bon compromis capacité/résilience.'])
),
S(68, 's68', 'Déduplication de données', 'déduplication de données',
  def('Technique qui supprime les blocs redondants.')+
  h3('Rôle')+
  ul(['Réduire l\u2019espace disque utilisé.','Optimiser le stockage.'])+
  h3('Fonctionnement')+
  ul(['Les blocs identiques sont stockés une seule fois.','Les fichiers pointent vers les blocs communs.'])+
  h3('Usage')+
  ul(['Serveurs de fichiers.','Volumes avec beaucoup de données similaires.'])+
  piege(['Ne pas activer partout sans réflexion.','Vérifier compatibilité avec charges de travail.','---'])
),
S(69, 's69', 'Clichés instantanés VSS', 'clichés instantanés vss',
  def('VSS permet de créer des versions précédentes de fichiers.')+
  h3('Rôle')+
  ul(['Restaurer un fichier supprimé ou modifié.','Permettre aux utilisateurs de récupérer des versions.'])+
  inc(['Ce n\u2019est pas une sauvegarde complète.','Même volume = même risque en cas de perte du disque.','---'])+
  piege(['Cliché instantané ≠ sauvegarde. Le tableau de synthèse M202 rappelle que le cliché instantané n\u2019est pas une sauvegarde.','---'])
),
S(70, 's70', 'FSRM', 'fsrm',
  def('FSRM signifie File Server Resource Manager.')+
  h3('Rôle')+
  ul(['Gérer les quotas.','Filtrer les fichiers.','Générer des rapports de stockage.','Contrôler l\u2019utilisation du serveur de fichiers.'])+
  h3('Quota hard')+
  p('Bloque l\u2019écriture au dépassement.')+
  h3('Quota soft')+
  ul(['N\u2019empêche pas l\u2019écriture.','Génère une alerte.'])+
  h3('Filtrage de fichiers actif')+
  p('Bloque l\u2019enregistrement des extensions interdites.')+
  h3('Filtrage de fichiers passif')+
  p('Surveille et alerte sans bloquer.')+
  h3('Rapports')+
  ul(['Utilisation du stockage.','Fichiers volumineux.','Fichiers dupliqués.','Fichiers par propriétaire.'])+
  piege(['Hard quota = bloque.','Soft quota = alerte seulement.','Filtrage actif = bloque.','---'])
),
S(71, 's71', 'DFS', 'dfs',
  def('DFS signifie Distributed File System.')+
  h3('Rôle')+
  ul(['Fournir un espace de noms unifié.','Simplifier l\u2019accès aux partages.','Répliquer les données entre serveurs.','Améliorer disponibilité.'])+
  h3('DFS Namespace')+
  p('Espace de noms DFS. Présente plusieurs partages sous un chemin logique unique.')+
  h4('Exemple')+
  p('<code>\\\\domaine.local\\partages</code>')+
  h3('DFS Replication')+
  p('Réplique les données entre serveurs.')+
  h3('RDC')+
  ul(['Remote Differential Compression.','Réplique seulement les modifications.','Réduit la bande passante.'])+
  adv(['Accès simplifié.','Tolérance aux pannes.','Réplication multi-sites.','Meilleure disponibilité.','---'])+
  piege(['DFS Namespace = chemin logique.','DFS Replication = copie/réplication des données.','RDC = envoie seulement les différences.','---'])
),
S(72, 's72', 'PKI et AD CS', 'pki et ad cs',
  h3('PKI')+
  p('Public Key Infrastructure. Infrastructure de clés publiques.')+
  h3('AD CS')+
  p('Active Directory Certificate Services. Rôle Windows Server permettant de créer une autorité de certification.')+
  h3('Rôle')+
  ul(['Émettre certificats.','Gérer certificats.','Révoquer certificats.','Sécuriser les communications.'])+
  h3('Autorité racine')+
  ul(['CA principale.','Idéalement hors ligne pour plus de sécurité.'])+
  h3('Autorité intermédiaire')+
  ul(['CA en ligne.','Émet les certificats aux utilisateurs, serveurs et services.'])+
  h3('Certificat')+
  p('Lie une identité à une clé publique.')+
  h3('Usages')+
  ul(['HTTPS.','VPN.','EFS.','Authentification.','Signature.','Chiffrement.'])+
  piege(['Bonne pratique : racine hors ligne, intermédiaire en ligne.','---'])
),
]);
