addM202Sections([
S(1, 's1', 'Introduction Windows Server', 'introduction windows server',
  def('Windows Server est un système d\u2019exploitation serveur Microsoft utilisé pour fournir et administrer des services réseau.')+
  h3('Rôle général')+
  ul(['Centraliser l\u2019administration.','Gérer les utilisateurs.','Gérer les ordinateurs.','Gérer les groupes.','Fournir des services réseau.','Héberger des rôles serveur.','Assurer l\u2019authentification.','Partager des fichiers.','Déployer des systèmes.','Virtualiser des machines.','Appliquer des stratégies.'])+
  h3('Services principaux')+
  ul(['Active Directory Domain Services.','DNS.','DHCP.','GPO.','Serveur de fichiers.','DFS.','Hyper-V.','WDS.','PKI / AD CS.','IPAM.','Windows Admin Center.'])+
  h3('Idée centrale')+
  p('<strong>Installer → Configurer → Promouvoir → Administrer → Sécuriser → Superviser → Déployer</strong>')
),
S(2, 's2', 'Éditions Windows Server 2019', 'éditions windows server 2019',
  h3('Standard')+
  ul(['Édition adaptée aux serveurs physiques.','Adaptée aux environnements peu virtualisés.','Permet un nombre limité de machines virtuelles selon licence.'])+
  h3('Datacenter')+
  ul(['Édition adaptée aux datacenters.','Adaptée au cloud privé.','Adaptée aux environnements fortement virtualisés.','Permet un nombre illimité de machines virtuelles selon le modèle de licence.'])+
  h3('Essentials')+
  ul(['Édition destinée aux petites entreprises.','Limite typique :','25 utilisateurs ;','50 appareils.'])+
  h3('Hyper-V Server')+
  ul(['Hyperviseur seul.','Utilisé pour virtualisation sans interface Windows Server complète.'])+
  piege(['Standard = peu virtualisé.','Datacenter = forte virtualisation.','Essentials = petite entreprise.','Hyper-V Server = hyperviseur seul.','---'])
),
S(3, 's3', 'Licence Windows Server 2019', 'licence windows server 2019',
  h3('Principe')+
  p('Le modèle de licence est basé principalement sur les cœurs processeur.')+
  h3('Choix de licence')+
  ul(['Standard si peu de VM.','Datacenter si beaucoup de VM.','Essentials si petite entreprise.','Hyper-V Server si besoin d\u2019hyperviseur uniquement.'])+
  piege(['Le choix dépend surtout du niveau de virtualisation.','---'])
),
S(4, 's4', 'Types d\u2019installation Windows Server', 'types d\u2019installation windows server',
  h3('Expérience de bureau')+
  ul(['Installation complète avec interface graphique.','Plus facile pour l\u2019administration locale.','Plus lourde.','Consomme plus de ressources.','Surface d\u2019attaque plus grande.'])+
  h3('Server Core')+
  ul(['Installation minimale.','Pas d\u2019interface graphique complète.','Administration par PowerShell, RSAT, Server Manager ou WAC.','Consomme moins de ressources.','Surface d\u2019attaque réduite.','Plus sécurisé.'])+
  h3('Point important')+
  p('Sous Windows Server 2019, le choix Core / GUI doit être fait avec prudence car le basculement après installation n\u2019est pas prévu simplement. Le support insiste sur l\u2019impossibilité de basculer entre installation complète et minimale après installation.')+
  piege(['Server Core = plus sécurisé car moins de composants installés.','Expérience de bureau = plus simple mais plus exposée.','---'])
),
S(5, 's5', 'Prérequis matériels Windows Server 2019', 'prérequis matériels windows server 2019',
  h3('Minimum')+
  ul(['Processeur 64 bits.','1,4 GHz minimum.','2 Go de RAM minimum.','15 Go disque minimum pour installation de base.'])+
  h3('Recommandé pour virtualisation')+
  ul(['Plus de RAM.','Au moins 8 Go selon le support.','Espace disque suffisant pour les VHDX.','CPU adapté au nombre de VM.'])+
  piege(['Le minimum permet l\u2019installation.','La virtualisation nécessite beaucoup plus.','---'])
),
S(6, 's6', 'Installation initiale du serveur', 'installation initiale du serveur',
  h3('Étapes')+
  ul(['Démarrer sur ISO ou DVD.','Choisir langue et clavier.','Cliquer sur Installer maintenant.','Choisir l\u2019édition.','Choisir Core ou Expérience de bureau.','Accepter la licence.','Choisir installation personnalisée.','Partitionner le disque.','Copier les fichiers.','Redémarrer.','Définir le mot de passe Administrateur.'])+
  h3('Configurations après installation')+
  ul(['Renommer le serveur.','Configurer une IP statique.','Configurer DNS.','Configurer date et heure.','Activer Windows.','Appliquer les mises à jour.','Activer Bureau à distance si nécessaire.','Configurer pare-feu.','Joindre le domaine si nécessaire.'])+
  h3('Pourquoi IP statique')+
  p('Les rôles d\u2019infrastructure doivent rester joignables avec la même adresse.')+
  h4('Exemples')+
  ul(['Contrôleur de domaine.','DNS.','DHCP.','Serveur de fichiers.','WDS.'])
),
S(7, 's7', 'Configuration de base PowerShell', 'configuration de base powershell',
  h3('Redémarrer')+
  p('<code>Restart-Computer</code>')+
  h3('Arrêter')+
  p('<code>Stop-Computer</code>')+
  h3('Renommer le serveur')+
  p('<code>Rename-Computer -NewName "TRI-DC" -Restart</code>')+
  h3('Lister les interfaces')+
  p('<code>Get-NetIPInterface</code>')+
  h3('Configurer une IP statique')+
  p('<code>New-NetIPAddress -InterfaceIndex 12 -IPAddress 172.16.0.200 -PrefixLength 24 -DefaultGateway 172.16.0.1</code>')+
  h3('Configurer les DNS')+
  p('<code>Set-DnsClientServerAddress -InterfaceIndex 12 -ServerAddresses ("172.16.0.10","172.16.0.11")</code>')+
  h3('Joindre un domaine')+
  p('<code>Add-Computer -DomainName Adatum.com -Restart</code>')+
  piege(['Toujours identifier l\u2019InterfaceIndex avant de configurer l\u2019adresse IP. Les commandes de base apparaissent dans le support PowerShell M202.','---'])
),
S(8, 's8', 'System Insights', 'system insights',
  def('System Insights est une fonctionnalité Windows Server 2019 d\u2019analyse prédictive locale.')+
  h3('Rôle')+
  ul(['Prévoir l\u2019utilisation future des ressources serveur.','Aider à anticiper les problèmes de capacité.','Traiter les données localement sans dépendance cloud.'])+
  h3('Capacités par défaut')+
  ul(['Prévision CPU.','Prévision réseau.','Prévision du stockage total.','Prévision de la consommation par volume.'])+
  h3('États possibles')+
  ul(['OK.','Avertissement.','Critique.','Erreur.','Aucun si données insuffisantes.'])+
  adv(['Analyse locale.','Confidentialité.','Prévision de capacité.','---'])
),
S(9, 's9', 'Hyper-V', 'hyper-v',
  def('Hyper-V est l\u2019hyperviseur Microsoft intégré à Windows Server.')+
  h3('Type')+
  ul(['Hyperviseur de type 1.','Il fonctionne directement au-dessus du matériel hôte.','Il contrôle les machines virtuelles.'])+
  h3('Rôle')+
  ul(['Créer des machines virtuelles.','Isoler plusieurs systèmes sur un même serveur physique.','Optimiser l\u2019utilisation du matériel.','Tester des environnements.','Consolider les serveurs.'])+
  h3('Composants d\u2019une VM')+
  ul(['Processeurs virtuels.','Mémoire.','Disque virtuel VHD/VHDX.','Carte réseau virtuelle.','Firmware BIOS ou UEFI.','Contrôleur IDE ou SCSI selon génération.','Fichiers de configuration.','Checkpoints.'])
),
S(10, 's10', 'VM Génération 1 et Génération 2', 'vm génération 1 et génération 2',
  h3('Génération 1')+
  ul(['BIOS classique.','Contrôleur IDE possible.','Compatible anciens systèmes.','Maximum cité : 64 vCPU.','RAM max citée : 1 To.'])+
  h3('Génération 2')+
  ul(['UEFI.','Secure Boot.','SCSI uniquement.','Matériel virtuel moderne.','Ajout de RAM à chaud.','Maximum cité : 240 vCPU.','RAM max citée : 12 To.'])+
  h3('Avantage UEFI')+
  ul(['Démarrage sécurisé.','Meilleure sécurité.','Support de fonctionnalités modernes.'])+
  piege(['Génération 2 = UEFI + Secure Boot + RAM à chaud.','Génération 1 = BIOS + compatibilité ancienne.','---'])
),
S(11, 's11', 'Commutateurs virtuels Hyper-V', 'commutateurs virtuels hyper-v',
  h3('Externe')+
  ul(['Les VM communiquent avec le réseau physique.','Utilise la carte réseau physique de l\u2019hôte.','Permet accès LAN/Internet.'])+
  h3('Interne')+
  ul(['Communication entre VM et hôte.','Pas d\u2019accès direct au réseau physique.'])+
  h3('Privé')+
  ul(['Communication uniquement entre VM.','L\u2019hôte ne communique pas avec les VM.','Isolation maximale.'])+
  piege(['Interne = VM ↔ hôte.','Privé = VM ↔ VM seulement.','Externe = VM ↔ réseau physique.','---'])
),
S(12, 's12', 'Disques virtuels Hyper-V', 'disques virtuels hyper-v',
  h3('VHD')+
  ul(['Ancien format.','Limité à environ 2 To.','Format hérité.'])+
  h3('VHDX')+
  ul(['Format moderne.','Supporte jusqu\u2019à 64 To.','Plus résistant à la corruption.','Recommandé.'])+
  h3('Disque fixe')+
  ul(['Espace total réservé dès la création.','Performances plus stables.','Consomme immédiatement l\u2019espace.'])+
  h3('Disque dynamique')+
  ul(['Grandit selon les données.','Économise l\u2019espace.','Performance moins prévisible.'])+
  h3('Disque de différenciation')+
  ul(['Dépend d\u2019un disque parent.','Contient seulement les modifications.','Si le parent est modifié ou supprimé, la VM peut devenir inutilisable.'])+
  h3('Pass-Through Disk')+
  ul(['Accès direct à un disque physique.','Utilisé pour performance ou besoin spécifique.','Moins flexible que VHDX.'])
),
]);
