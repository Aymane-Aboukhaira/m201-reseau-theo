addM205Sections([
S(1, 's1', 'Introduction à la sécurité informatique', 'introduction à la sécurité informatique',
  def('La sécurité informatique est la protection des ressources matérielles, logicielles, réseaux, systèmes et données contre : accès non autorisés ; attaques ; dommages ; modifications non autorisées ; interruption de service ; vol ou fuite d’informations.')+
  h3('Objectif général')+
  ul(['Assurer que les informations restent :','confidentielles ;','intègres ;','disponibles ;','authentiques ;','non répudiables ;','accessibles uniquement aux personnes autorisées.'])+
  h3('Idée centrale')+
  p('<strong>Menace → exploite → Vulnérabilité → génère → Risque → cause → Préjudice</strong>')+
  h3('Formule clé')+
  p('<strong>Risque = Préjudice × Probabilité d’occurrence</strong>')+
  h3('Risque acceptable')+
  p('Un risque peut être accepté si les mesures de prévention sont effectives et efficaces.')+
  h4('Exemple 1')+
  ul(['Forte probabilité mais préjudice prévenu.','Exemple : panne disque + sauvegardes testées.'])+
  h4('Exemple 2')+
  ul(['Forte gravité mais faible probabilité.','Exemple : météorite.'])
),
S(2, 's2', 'Concepts fondamentaux', 'concepts fondamentaux',
  h3('Attaque')+
  p('Action qui compromet la confidentialité, l’intégrité ou la disponibilité d’un système, d’un service ou d’une information.')+
  h3('Menace')+
  ul(['Danger potentiel pouvant provoquer :','vol de données ;','destruction ;','corruption ;','indisponibilité ;','perte financière ;','atteinte à la réputation.'])+
  h3('Vulnérabilité')+
  ul(['Faiblesse exploitable dans :','un système ;','une application ;','une configuration ;','une procédure ;','un comportement humain.'])+
  h4('Exemples')+
  ul(['Bug logiciel.','Mot de passe faible.','Port ouvert inutile.','Mauvaise configuration.','Utilisateur non formé.'])+
  h3('Risque')+
  p('Possibilité qu’une menace exploite une vulnérabilité et provoque un dommage.')+
  h3('Préjudice')+
  p('Conséquence négative du risque.')+
  h4('Exemples')+
  ul(['Perte de données.','Arrêt de service.','Vol d’identifiants.','Atteinte à l’image.','Perte financière.'])+
  h3('Contre-mesure')+
  ul(['Moyen technique, humain ou organisationnel permettant de réduire :','la probabilité d’une attaque ;','l’impact d’une attaque ;','la surface d’attaque ;','le temps de détection ;','le temps de récupération.'])+
  h3('Mécanisme de sécurité')+
  p('Processus ou dispositif conçu pour détecter, prévenir ou récupérer d’une attaque.')+
  h4('Exemples')+
  ul(['Chiffrement.','Pare-feu.','Signature numérique.','Journalisation.','Sauvegarde.','Contrôle d’accès.'])+
  h3('Service de sécurité')+
  p('Service qui améliore la sécurité des communications ou des traitements.')+
  h4('Exemples')+
  ul(['Authentification.','Contrôle d’accès.','Confidentialité.','Intégrité.','Non-répudiation.'])
),
S(3, 's3', 'Objectifs de sécurité — CIA+', 'objectifs de sécurité — cia+',
  memo(['<strong>I-A-C-NR-D</strong>','Intégrité.','Authenticité.','Confidentialité.','Non-répudiation.','Disponibilité.'])+
  h3('Confidentialité')+
  p('Garantit que seules les personnes autorisées peuvent accéder aux données.')+
  h4('Exemples')+
  ul(['Chiffrement AES.','VPN.','HTTPS.','Contrôle d’accès.','ACL.'])+
  h3('Intégrité')+
  p('Garantit que les données ne sont pas modifiées sans autorisation.')+
  h4('Exemples')+
  ul(['Hash.','Signature numérique.','Contrôle d’intégrité.','Base de données cohérente.'])+
  h3('Disponibilité')+
  p('Garantit que les données et services restent accessibles aux utilisateurs autorisés.')+
  h4('Exemples')+
  ul(['Redondance.','Load balancing.','Sauvegardes.','Haute disponibilité.','Protection anti-DoS.'])+
  h3('Authenticité')+
  p('Vérifie l’identité réelle d’un utilisateur, système ou émetteur.')+
  h4('Exemples')+
  ul(['Mot de passe.','Certificat.','MFA.','802.1X.','RADIUS.'])+
  h3('Non-répudiation')+
  p('Empêche une personne de nier une action réalisée ou un message envoyé.')+
  h4('Exemples')+
  ul(['Signature numérique.','Journaux d’audit.','Notarisation.'])+
  h3('Contrôle d’accès')+
  p('Garantit que seules les entités autorisées accèdent aux ressources.')+
  h4('Exemples')+
  ul(['ACL.','RBAC.','VLAN.','Pare-feu.','Droits utilisateurs.'])
),
S(4, 's4', 'Différences importantes', 'différences importantes',
  h3('Confidentialité ≠ Authenticité')+
  h4('Confidentialité')+
  ul(['Protège le contenu.','Objectif : personne non autorisée ne doit lire.'])+
  h4('Authenticité')+
  ul(['Vérifie l’identité.','Objectif : être sûr de l’émetteur ou utilisateur.'])+
  h3('Identification ≠ Authentification')+
  h4('Identification')+
  ul(['Déclarer qui on est.','Élément public.','Exemple : nom d’utilisateur.'])+
  h4('Authentification')+
  ul(['Prouver qui on est.','Élément secret ou personnel.','Exemple : mot de passe, certificat, MFA.'])+
  h3('Authentification ≠ Autorisation')+
  h4('Authentification')+
  p('Qui es-tu ?')+
  h4('Autorisation')+
  p('Qu’as-tu le droit de faire ?')+
  h3('Menace ≠ Vulnérabilité ≠ Risque')+
  h4('Menace')+
  p('Danger.')+
  h4('Vulnérabilité')+
  p('Faiblesse.')+
  h4('Risque')+
  p('Résultat possible si la menace exploite la faiblesse.')+
  h3('IDS ≠ IPS')+
  h4('IDS')+
  ul(['Surveille.','Détecte.','Passif.','Ne bloque pas.'])+
  h4('IPS')+
  ul(['Inspecte.','Détecte.','Bloque.','Actif.'])+
  h3('Attaque active ≠ Attaque passive')+
  h4('Attaque active')+
  p('Modifie, bloque ou perturbe.')+
  h4('Attaque passive')+
  p('Observe ou intercepte sans modifier.')
),
S(5, 's5', 'Services, mécanismes et attaques', 'services, mécanismes et attaques',
  h3('Attaque de sécurité')+
  p('Action qui compromet la sécurité.')+
  h4('Exemples')+
  ul(['Vol de données.','DoS.','Injection.','Modification de fichiers.','Sniffing.'])+
  h3('Mécanisme de sécurité')+
  p('Moyen utilisé pour contrer une attaque.')+
  h4('Exemples')+
  ul(['Chiffrement.','Pare-feu.','Contrôle d’accès.','Signature numérique.'])+
  h3('Service de sécurité')+
  p('Fonction fournie grâce à des mécanismes.')+
  h4('Exemples')+
  ul(['Confidentialité.','Authentification.','Contrôle d’accès.','Non-répudiation.'])+
  h3('Relation')+
  p('Les services de sécurité utilisent des mécanismes pour contrer les attaques.')
),
S(6, 's6', 'Mécanismes de sécurité', 'mécanismes de sécurité',
  h3('Mécanismes spécifiques')+
  ul(['Chiffrement.','Signature numérique.','Contrôle d’accès.','Intégrité des données.','Échange d’authentification.','Remplissage du trafic.','Contrôle de routage.','Notarisation.'])+
  h3('Mécanismes omniprésents')+
  ul(['Fonctionnalité de confiance.','Étiquette de sécurité.','Détection d’événements.','Sentier d’audit de sécurité.','Récupération de sécurité.'])
),
S(7, 's7', 'Tableau mental — Objectif / Service / Mécanisme', 'tableau mental — objectif / service / mécanisme',
  h3('Authentification')+
  ul(['Service : authentification d’entité ou d’origine.','Mécanismes :','chiffrement ;','signature numérique ;','échange d’authentification.'])+
  h3('Contrôle d’accès')+
  ul(['Service : contrôle d’accès.','Mécanismes :','ACL ;','RBAC ;','pare-feu ;','droits.'])+
  h3('Confidentialité des données')+
  ul(['Service : confidentialité.','Mécanismes :','chiffrement ;','contrôle de routage ;','VPN.'])+
  h3('Confidentialité du flux')+
  ul(['Service : confidentialité du trafic.','Mécanismes :','chiffrement ;','remplissage du trafic ;','routage contrôlé.'])+
  h3('Intégrité')+
  ul(['Service : intégrité des données.','Mécanismes :','hash ;','signature ;','contrôle d’intégrité.'])+
  h3('Non-répudiation')+
  ul(['Service : non-répudiation.','Mécanismes :','signature numérique ;','journaux ;','notarisation.'])+
  h3('Disponibilité')+
  ul(['Service : disponibilité.','Mécanismes :','redondance ;','sauvegarde ;','load balancing ;','anti-DoS ;','récupération.'])
),
S(8, 's8', 'Attaques passives et actives', 'attaques passives et actives',
  h3('Attaque passive')+
  p('L’attaquant observe ou intercepte sans modifier les données.')+
  h4('Exemples')+
  ul(['Sniffing.','Écoute réseau.','Interception de trafic.','Analyse passive.'])+
  h4('Particularité')+
  p('Difficile à détecter car elle laisse peu de traces.')+
  h3('Attaque active')+
  p('L’attaquant modifie, supprime, bloque ou perturbe le système.')+
  h4('Exemples')+
  ul(['DoS.','DDoS.','Injection.','Modification de données.','ARP spoofing.','Ransomware.'])
),
S(9, 's9', 'DoS et DDoS', 'dos et ddos',
  h3('DoS')+
  ul(['Denial of Service.','Un seul attaquant envoie un volume massif de requêtes vers une cible.'])+
  h3('Objectif')+
  ul(['Épuiser :','CPU ;','mémoire ;','bande passante ;','sessions ;','ressources serveur.'])+
  h3('Impact')+
  ul(['Service inaccessible.','Perte financière.','Atteinte à la réputation.'])+
  h3('Solutions')+
  ul(['Rate limiting.','Firewall.','IPS.','Filtrage des paquets malformés.','Blackholing.','Redondance.'])+
  h3('DDoS')+
  ul(['Distributed Denial of Service.','Même principe que DoS, mais depuis plusieurs machines infectées.'])+
  h3('Source')+
  ul(['Botnet.','Zombies.','Machines compromises.'])+
  h3('Impact')+
  ul(['Plus difficile à bloquer.','Sources distribuées.','Peut saturer de grandes infrastructures.'])+
  h3('Solutions')+
  ul(['Anti-DDoS cloud.','Scrubbing center.','Anycast.','ACL opérateur.','IPS.','Surveillance trafic.'])+
  h3('Différence DoS / DDoS')+
  ul(['DoS = une source principale.','DDoS = plusieurs sources distribuées.'])
),
S(10, 's10', 'TCP SYN Flooding', 'tcp syn flooding',
  def('TCP SYN flooding est une attaque DoS qui exploite l’établissement de connexion TCP.')+
  h3('Fonctionnement normal TCP')+
  ul(['SYN.','SYN-ACK.','ACK.'])+
  h3('Principe de l’attaque')+
  ul(['L’attaquant envoie beaucoup de paquets SYN.','Le serveur réserve des ressources pour des connexions incomplètes.','L’ACK final n’arrive pas.','La file d’attente se remplit.'])+
  h3('Impact')+
  p('Le serveur ne peut plus accepter de vraies connexions.')+
  h3('Solutions')+
  ul(['SYN cookies.','Firewall.','IPS.','Rate limiting.','Timeout réduit.','Filtrage anti-spoofing.'])
),
S(11, 's11', 'Attaques couche 2', 'attaques couche 2',
  h3('Idée centrale')+
  ul(['La couche 2 est un maillon faible.','Si la couche 2 est compromise, les couches supérieures sont affectées.'])+
  h3('Conséquence')+
  p('Même VPN, pare-feu ou IPS peuvent être insuffisants si l’attaque est interne au LAN.')+
  h3('Types d’attaques couche 2')+
  ul(['MAC Flooding.','VLAN Hopping.','DHCP Starvation.','DHCP Spoofing.','ARP Spoofing.','Attaque STP.','Usurpation MAC/IP.'])
),
S(12, 's12', 'MAC Flooding', 'mac flooding',
  def('MAC Flooding est une attaque qui sature la table CAM du switch.')+
  h3('Fonctionnement')+
  ul(['L’attaquant envoie beaucoup de trames avec de fausses adresses MAC sources.','Le switch remplit sa table CAM.','Quand la table est saturée, le switch ne sait plus où envoyer certaines trames.','Il peut faire du flooding comme un hub.'])+
  h3('Impact')+
  ul(['Sniffing possible.','Perte de performance.','Risque d’interception.'])+
  h3('Solution')+
  p('Port Security.')
),
S(13, 's13', 'VLAN Hopping', 'vlan hopping',
  def('VLAN Hopping est une attaque permettant d’accéder à un VLAN non autorisé.')+
  h3('Méthodes')+
  ul(['Abus de DTP.','Double tagging 802.1Q.'])+
  h3('Impact')+
  ul(['Accès à des VLANs normalement isolés.','Risque d’accès à des données sensibles.'])+
  h3('Solutions')+
  ul(['Désactiver DTP.','Forcer les ports utilisateurs en mode access.','Changer la native VLAN.','Utiliser une native VLAN dédiée non utilisée.','Désactiver les ports inutilisés.','Ne jamais laisser les ports utilisateurs négocier un trunk.'])
),
]);
