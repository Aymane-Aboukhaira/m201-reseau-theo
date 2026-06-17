addM202Sections([
S(13, 's13', 'Mémoire dynamique Hyper-V', 'mémoire dynamique hyper-v',
  def('Fonction qui ajuste la RAM d\u2019une VM selon ses besoins.')+
  h3('Paramètres')+
  ul(['RAM minimale.','RAM de démarrage.','RAM maximale.'])+
  adv(['Optimise l\u2019utilisation mémoire entre plusieurs VM.','---'])+
  inc(['Pas recommandé pour certains rôles serveur qui exigent une mémoire stable.','---'])+
  piege(['Serveurs critiques = mémoire prévisible préférable.','---'])
),
S(14, 's14', 'Checkpoints Hyper-V', 'checkpoints hyper-v',
  def('Point de contrôle d\u2019une VM à un instant donné.')+
  h3('Rôle')+
  ul(['Revenir à un état précédent.','Tester une modification.','Faire des essais.'])+
  inc(['Ce n\u2019est pas une sauvegarde.','Le checkpoint dépend du même stockage.','Il peut poser problème pour certains rôles comme les contrôleurs de domaine.','---'])+
  piege(['Checkpoint ≠ sauvegarde.','---'])
),
S(15, 's15', 'Live Migration', 'live migration',
  def('Migration à chaud d\u2019une VM d\u2019un hôte Hyper-V vers un autre sans interruption de service.')+
  h3('Prérequis')+
  ul(['Deux hôtes Hyper-V compatibles.','Réseau entre hôtes.','Droits administratifs.','Authentification configurée.','VM compatible.','Stockage adapté.'])+
  h3('Authentification CredSSP')+
  ul(['Simple.','Nécessite d\u2019être connecté sur l\u2019hôte source.'])+
  h3('Authentification Kerberos')+
  ul(['Permet migration à distance.','Nécessite délégation configurée.'])+
  h3('Groupe Administrateurs Hyper-V')+
  p('Donne les droits nécessaires pour gérer Hyper-V et effectuer des migrations.')
),
S(16, 's16', 'HGS et VM blindées', 'hgs et vm blindées',
  h3('HGS')+
  p('Host Guardian Service.')+
  h3('Rôle')+
  ul(['Protège les machines virtuelles blindées.','Empêche l\u2019accès non autorisé par l\u2019administrateur de l\u2019hôte.'])+
  h3('VM blindée')+
  ul(['VM protégée contre les accès non autorisés.','Protège les données et l\u2019état de la VM.'])+
  h3('Mode Offline HGS')+
  p('Permet à certaines VM protégées de continuer à démarrer si HGS est temporairement indisponible selon configuration.')
),
S(17, 's17', 'Gestionnaire de serveur', 'gestionnaire de serveur',
  def('Console Windows Server pour gérer le serveur local et les serveurs distants.')+
  h3('Rôle')+
  ul(['Afficher l\u2019état des rôles.','Gérer les services.','Ajouter ou supprimer des rôles.','Gérer plusieurs serveurs.','Lancer des outils.','Afficher événements et alertes.','Exécuter BPA.'])+
  h3('Tableau de bord')+
  ul(['Affiche :','rôles ;','services ;','événements ;','performances ;','état des serveurs ;','alertes.'])+
  h3('Indicateurs')+
  ul(['Les alertes signalent :','service arrêté ;','problème critique ;','événement important ;','rôle en erreur.'])+
  h3('Groupes de serveurs')+
  ul(['Permettent de regrouper plusieurs serveurs.','Facilitent l\u2019administration multi-serveurs.'])+
  h3('Administration distante')+
  p('Depuis un serveur avec interface graphique, on peut administrer des serveurs Core ou distants.')
),
S(18, 's18', 'Best Practice Analyzer', 'best practice analyzer',
  def('BPA est un outil qui vérifie si les rôles installés respectent les bonnes pratiques Microsoft.')+
  h3('Vérifie')+
  ul(['Configuration.','Sécurité.','Disponibilité.','Dépendances.','Erreurs possibles.','Écarts par rapport aux recommandations.'])+
  h3('Après correction')+
  p('Relancer l\u2019analyse BPA pour vérifier que l\u2019erreur a disparu.')
),
S(19, 's19', 'Windows Admin Center', 'windows admin center',
  def('Windows Admin Center est une interface web moderne d\u2019administration Windows Server.')+
  h3('Rôle')+
  ul(['Administrer localement ou à distance via navigateur.','Gérer serveurs.','Gérer rôles.','Gérer services.','Gérer stockage.','Gérer Hyper-V.','Gérer mises à jour.','Utiliser PowerShell distant.'])+
  h3('Mécanismes')+
  ul(['WinRM.','Remote PowerShell.','WMI.'])+
  adv(['Administration moderne.','Interface web.','Gestion multi-serveurs.','Moins besoin de consoles MMC locales.','Intégrations Azure possibles.','---'])+
  h3('Comparaison')+
  ul(['Gestionnaire de serveur = console classique Windows Server.','Windows Admin Center = interface web moderne.'])
),
S(20, 's20', 'Active Directory Domain Services', 'active directory domain services',
  def('AD DS est le service d\u2019annuaire Microsoft.')+
  h3('Rôle')+
  ul(['Centraliser les identités.','Gérer utilisateurs.','Gérer ordinateurs.','Gérer groupes.','Gérer stratégies.','Assurer authentification.','Organiser les ressources.','Appliquer la sécurité.'])+
  h3('Base AD')+
  ul(['Stocke les objets du domaine.','Utilise la base NTDS.DIT.'])+
  h3('Contrôleur de domaine')+
  ul(['Serveur qui héberge AD DS.','Authentifie les utilisateurs.','Réplique avec les autres DC.','Publie les services AD dans DNS.'])
),
S(21, 's21', 'Structure logique Active Directory', 'structure logique active directory',
  h3('Forêt')+
  ul(['Niveau le plus haut.','Frontière de sécurité maximale.','Partage :','schéma ;','configuration ;','catalogue global ;','relations d\u2019approbation internes.'])+
  h3('Domaine')+
  ul(['Unité administrative.','Partage une base d\u2019annuaire.','Possède une stratégie de sécurité.','Contient au moins un contrôleur de domaine.','Possède un nom DNS unique.'])+
  h3('Arborescence')+
  p('Ensemble de domaines partageant un espace de noms DNS contigu.')+
  h4('Exemple')+
  ul(['formation.local.','paris.formation.local.','tanger.formation.local.'])+
  h3('Domaine enfant')+
  p('Domaine créé sous un domaine parent. Relation parent-enfant bidirectionnelle et transitive.')+
  h3('OU')+
  ul(['Unité d\u2019organisation.','Conteneur logique dans un domaine.','Sert à organiser les objets.','Sert à déléguer l\u2019administration.','Sert à appliquer des GPO.'])+
  piege(['Forêt = frontière de sécurité.','Domaine = limite administrative.','OU = organisation et délégation, pas frontière de sécurité.','---'])
),
S(22, 's22', 'Objets Active Directory', 'objets active directory',
  h3('Objets courants')+
  ul(['Utilisateur.','Groupe.','Ordinateur.','OU.','Imprimante.','Contact.','Compte de service.'])+
  h3('Compte utilisateur')+
  ul(['Représente une personne ou un service.','Permet l\u2019ouverture de session.','Contient identifiant, mot de passe, UPN, groupes, profil.'])+
  h3('Compte ordinateur')+
  p('Représente une machine jointe au domaine. Permet l\u2019authentification de l\u2019ordinateur dans le domaine.')+
  h3('Groupe')+
  p('Regroupe des utilisateurs, ordinateurs ou autres groupes. Sert à affecter des droits plus facilement.')+
  h3('OU')+
  p('Conteneur logique pour organiser et appliquer des GPO.')
),
S(23, 's23', 'Partitions Active Directory', 'partitions active directory',
  def('La base Active Directory est divisée en partitions pour optimiser la réplication.')+
  h3('Partition de schéma')+
  ul(['Contient les définitions des objets et attributs.','Répliquée dans toute la forêt.'])+
  h3('Partition de configuration')+
  ul(['Contient la structure logique de la forêt.','Répliquée dans toute la forêt.'])+
  h3('Partition de domaine')+
  ul(['Contient les objets du domaine :','utilisateurs ;','groupes ;','ordinateurs ;','OU.','Répliquée uniquement dans le domaine concerné.'])+
  h3('Partition d\u2019application')+
  ul(['Contient des données d\u2019applications.','Exemple : zones DNS intégrées à AD.','Portée configurable.'])+
  piege(['Schéma et configuration = forêt.','Domaine = uniquement domaine.','Application = selon configuration.','---'])
),
S(24, 's24', 'Rôles FSMO', 'rôles fsmo',
  def('FSMO signifie Flexible Single Master Operation. Ce sont des rôles uniques nécessaires pour certaines opérations critiques.')+
  h3('Nombre')+
  p('5 rôles FSMO.')+
  h3('Rôles au niveau forêt')+
  h4('Maître de schéma')+
  p('Autorise les modifications du schéma AD.')+
  h4('Maître d\u2019attribution de noms de domaine')+
  p('Contrôle l\u2019ajout et la suppression de domaines dans la forêt.')+
  h3('Rôles au niveau domaine')+
  h4('Maître RID')+
  ul(['Distribue des blocs RID aux contrôleurs de domaine.','Garantit l\u2019unicité des SID.'])+
  h4('Émulateur PDC')+
  ul(['Rôle très important au quotidien.','Source de temps du domaine.','Gère les changements de mot de passe en priorité.','Compatible avec anciens clients.','Participe au verrouillage de compte.'])+
  h4('Maître infrastructure')+
  p('Met à jour les références d\u2019objets inter-domaines.')+
  piege(['2 rôles forêt.','3 rôles domaine.','PDC Emulator est souvent le plus critique au quotidien.','---'])
),
]);
