addM202Sections([
S(37, 's37', 'Commandes PowerShell objets AD', 'commandes powershell objets ad',
  h3('Créer une OU')+
  p('<code>New-ADOrganizationalUnit -Name "NTIC"</code>')+
  h3('Créer une sous-OU')+
  p('<code>New-ADOrganizationalUnit -Name "TRI" -Path "OU=NTIC,DC=adatum,DC=com"</code>')+
  h3('Afficher les OU')+
  p('<code>Get-ADOrganizationalUnit -Filter *</code>')+
  h3('Créer un utilisateur')+
  p('<code>New-ADUser</code>')+
  h3('Définir mot de passe')+
  p('<code>Set-ADAccountPassword</code>')+
  h3('Activer un compte')+
  p('<code>Enable-ADAccount</code>')+
  h3('Désactiver un compte')+
  p('<code>Disable-ADAccount</code>')+
  h3('Supprimer un utilisateur')+
  p('<code>Remove-ADUser</code>')+
  h3('Créer un ordinateur')+
  p('<code>New-ADComputer</code>')+
  h3('Modifier un ordinateur')+
  p('<code>Set-ADComputer</code>')+
  h3('Supprimer un ordinateur')+
  p('<code>Remove-ADComputer</code>')+
  h3('Créer un groupe')+
  p('<code>New-ADGroup</code>')+
  h3('Ajouter membres')+
  p('<code>Add-ADGroupMember</code>')+
  h3('Retirer membres')+
  p('<code>Remove-ADGroupMember</code>')+
  h3('Déplacer objet')+
  p('<code>Move-ADObject</code>')+
  h3('Renommer objet')+
  p('<code>Rename-ADObject</code>')
),
S(38, 's38', 'Protection contre suppression accidentelle', 'protection contre suppression accidentelle',
  def('Option empêchant la suppression involontaire d\u2019un objet AD.')+
  h3('Souvent activée sur')+
  p('OU.')+
  h3('Pour supprimer une OU protégée')+
  ul(['Désactiver la protection.','Puis supprimer l\u2019OU.'])+
  piege(['Si la suppression échoue, vérifier la protection contre suppression accidentelle.','---'])
),
S(39, 's39', 'Groupes Active Directory', 'groupes active directory',
  h3('Catégories')+
  ul(['Groupe de sécurité.','Groupe de distribution.'])+
  h3('Groupe de sécurité')+
  ul(['Utilisé pour attribuer des permissions.','Peut aussi servir à la distribution mail selon contexte.'])+
  h3('Groupe de distribution')+
  ul(['Utilisé pour e-mail.','Ne sert pas à attribuer des permissions de sécurité.'])+
  h3('Étendues')+
  ul(['Local domaine.','Global.','Universel.'])+
  h3('Groupe global')+
  ul(['Contient généralement des comptes du même domaine.','Peut être utilisé pour organiser les utilisateurs par rôle.'])+
  h3('Groupe local domaine')+
  p('Utilisé pour attribuer des permissions sur les ressources du domaine.')+
  h3('Groupe universel')+
  ul(['Utilisé dans une forêt multi-domaines.','Stocké dans le catalogue global.'])
),
S(40, 's40', 'Modèle AGDLP', 'modèle agdlp',
  h3('Signification')+
  ul(['A = Accounts.','G = Global Groups.','DL = Domain Local Groups.','P = Permissions.'])+
  h3('Principe')+
  ul(['Comptes utilisateurs dans groupes globaux.','Groupes globaux dans groupes locaux de domaine.','Permissions appliquées aux groupes locaux de domaine.'])+
  h3('Objectif')+
  ul(['Gestion propre des permissions.','Administration scalable.','Moins d\u2019erreurs.'])+
  memo(['Utilisateurs → Global → Domaine Local → Permission.'])
),
S(41, 's41', 'Jeton d\u2019accès', 'jeton d\u2019accès',
  def('Le jeton d\u2019accès est créé lors de l\u2019ouverture de session.')+
  h3('Contient')+
  ul(['SID utilisateur.','SID des groupes.','Droits.','Privilèges.'])+
  h3('Rôle')+
  p('Permet à Windows de vérifier les autorisations d\u2019accès.')+
  piege(['Après changement d\u2019appartenance à un groupe, l\u2019utilisateur doit souvent se déconnecter/reconnecter pour obtenir un nouveau jeton.','---'])
),
S(42, 's42', 'Corbeille Active Directory', 'corbeille active directory',
  def('Fonction permettant de restaurer des objets AD supprimés.')+
  adv(['Restauration sans redémarrage en mode DSRM.','Conserve davantage d\u2019attributs qu\u2019une restauration tombstone classique.','---'])+
  h3('Prérequis')+
  ul(['Niveau fonctionnel compatible.','Fonction activée.'])+
  piege(['Une fois activée, la Corbeille AD ne se désactive pas simplement.','---'])
),
S(43, 's43', 'DHCP Windows Server', 'dhcp windows server',
  def('DHCP attribue automatiquement une configuration IP aux clients.')+
  h3('Fournit')+
  ul(['Adresse IP.','Masque.','Passerelle.','DNS.','Durée de bail.','Options.'])+
  adv(['Évite les conflits IP.','Centralise la configuration.','Simplifie l\u2019administration.','---'])+
  h3('DORA')+
  ul(['Discover.','Offer.','Request.','Acknowledgement.'])+
  h3('Ports')+
  ul(['Serveur : UDP 67.','Client : UDP 68.'])+
  piege(['Le support de synthèse rappelle DHCP DORA avec Discover/Offer/Request/Acknowledge.','---'])
),
S(44, 's44', 'DHCP — Étendue', 'dhcp — étendue',
  def('Une étendue est une plage d\u2019adresses IP distribuables pour un sous-réseau.')+
  h3('Contient')+
  ul(['Plage de début.','Plage de fin.','Masque.','Exclusions.','Options.','Durée de bail.'])+
  h3('Exclusion')+
  p('Adresse ou plage non distribuée automatiquement.')+
  h4('Usage')+
  ul(['Serveur.','Imprimante.','Routeur.','Équipement avec IP statique.'])+
  h3('Réservation')+
  ul(['Attribue toujours la même IP à un client.','Basée sur l\u2019adresse MAC.'])+
  h3('Bail')+
  p('Attribution temporaire d\u2019une IP.')
),
S(45, 's45', 'Options DHCP', 'options dhcp',
  h3('Option 003')+
  p('Passerelle par défaut.')+
  h3('Option 006')+
  p('Serveur DNS.')+
  h3('Autres options possibles')+
  ul(['Nom de domaine.','Serveur WINS.','Serveur TFTP.','Option 150 selon téléphonie IP.'])+
  h3('Niveau d\u2019options')+
  ul(['Options serveur.','Options étendue.','Options réservation.'])+
  h3('Priorité logique')+
  ul(['Réservation spécifique.','Étendue.','Serveur.'])
),
S(46, 's46', 'DHCP Failover', 'dhcp failover',
  def('Haute disponibilité DHCP entre deux serveurs.')+
  h3('Modes')+
  h4('Load Balance')+
  p('Deux serveurs partagent la charge.')+
  h4('Hot Standby')+
  ul(['Serveur principal actif.','Serveur secondaire en attente.','Le secondaire prend le relais en cas de panne.'])+
  inc(['Maximum deux serveurs.','Fonctionne uniquement pour IPv4.','Les réservations doivent être créées sur les deux serveurs selon le support.','---'])+
  h3('Règle 80/20')+
  p('Sans basculement, on peut distribuer 80 % de la plage sur un serveur et 20 % sur l\u2019autre pour éviter les conflits.')
),
S(47, 's47', 'IPAM', 'ipam',
  def('IPAM signifie IP Address Management.')+
  h3('Rôle')+
  ul(['Découvrir.','Surveiller.','Auditer.','Gérer les plages IP.','Gérer les serveurs DHCP.','Gérer les serveurs DNS.'])+
  h3('Groupes locaux IPAM')+
  ul(['Utilisateurs IPAM : consultation.','Administrateurs IPAM ASM : gestion espace d\u2019adressage.','Administrateurs IPAM MSM : gestion multi-serveurs.','Administrateurs IPAM Audit : journaux.','Administrateurs IPAM : accès complet.'])+
  h3('Fonctionnement')+
  p('IPAM utilise des GPO pour configurer les droits sur les serveurs gérés. Communication via WMI ou RPC.')
),
S(48, 's48', 'Commandes PowerShell DHCP', 'commandes powershell dhcp',
  h3('Installer DHCP')+
  p('<code>Install-WindowsFeature DHCP -IncludeManagementTools</code>')+
  h3('Autoriser DHCP dans AD')+
  p('<code>Add-DhcpServerInDC -DnsName lon-svr1.adatum.com -IPAddress 172.16.0.21</code>')+
  h3('Créer groupes DHCP')+
  p('<code>Add-DhcpServerSecurityGroup</code>')+
  h3('Créer une étendue')+
  p('<code>Add-DhcpServerv4Scope -Name ofppt -StartRange 172.18.0.50 -EndRange 172.18.0.150 -SubnetMask 255.255.255.0</code>')+
  h3('Ajouter une exclusion')+
  p('<code>Add-DhcpServerv4ExclusionRange</code>')+
  h3('Configurer passerelle')+
  p('<code>Set-DhcpServerv4OptionValue -ScopeId 172.18.0.0 -Router 172.18.0.1</code>')+
  h3('Configurer DNS')+
  p('<code>Set-DhcpServerv4OptionValue -ScopeId 172.18.0.0 -DnsServer 172.18.0.10</code>')+
  h3('Créer réservation')+
  p('<code>Add-DhcpServerv4Reservation</code>')
),
]);
