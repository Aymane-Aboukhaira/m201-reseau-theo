addSections([
S(15,'s15','VLAN','VLAN réseau virtuel broadcast domaine données gestion natif voix',
  def("Un VLAN est un réseau local virtuel. Il permet de diviser logiquement un réseau physique en plusieurs réseaux séparés. Chaque VLAN représente un domaine de broadcast séparé.")+
  h3('Rôle')+ul(["Regrouper des équipements comme s'ils étaient sur un réseau séparé.","Isoler les diffusions.","Organiser le réseau par service.","Augmenter la sécurité.","Améliorer les performances."])+
  adv(["Sécurité renforcée.","Réduction des broadcasts.","Réduction des coûts.","Meilleures performances.","Flexibilité.","Organisation logique.","Administration simplifiée."])+
  p("Pourquoi deux VLANs ne communiquent pas directement : Ils appartiennent à des réseaux logiques différents. La communication nécessite un routage inter-VLAN.")+
  h3('Types de VLAN')+
  tbl(['Type','Description'],[
    ['<strong>VLAN par défaut</strong>','VLAN 1. Tous les ports y appartiennent par défaut. Ne peut pas être supprimé.'],
    ['<strong>VLAN de données</strong>','Trafic utilisateur. PC. Applications. Web. Email.'],
    ['<strong>VLAN de gestion</strong>','Administration des équipements. SSH. Telnet. Accès VTY. Adresse IP de management du switch.'],
    ['<strong>VLAN natif</strong>','VLAN transmis sans tag sur un trunk 802.1Q. Par défaut souvent VLAN 1. Doit être identique des deux côtés du trunk. Recommandé de le changer pour la sécurité.'],
    ['<strong>VLAN voix</strong>','Trafic VoIP. Téléphones IP. QoS prioritaire. Délai recommandé voix : inférieur à 150 ms.']
  ])+
  piege(["VLAN natif ≠ VLAN de gestion.","Ils peuvent tous les deux être VLAN 1 par défaut, mais leur rôle est différent."])
),

S(16,'s16','Port access, trunk, 802.1Q, DTP','port access trunk 802.1Q DTP tag VLAN dynamic trunking',
  h3('Port access')+p("Transporte un seul VLAN. Utilisé pour connecter : PC ; imprimante ; téléphone IP ; équipement final.")+
  h3('Port trunk')+p("Transporte plusieurs VLANs. Utilise IEEE 802.1Q. Utilisé entre : switch et switch ; switch et routeur ; switch et serveur ; switch et WLC ; switch et AP multi-SSID.")+
  h3('802.1Q')+ul(["Ajoute un tag VLAN dans la trame Ethernet.","Permet d'identifier le VLAN sur un lien trunk.","Le tag 802.1Q ajoute 4 octets.","La native VLAN circule sans tag."])+
  h3('Native VLAN mismatch')+p("Si la native VLAN n'est pas identique des deux côtés du trunk, il peut y avoir des problèmes de connectivité et de sécurité.")+
  h3('DTP')+p("Dynamic Trunking Protocol. Protocole Cisco. Négocie automatiquement le mode trunk entre switches Cisco.")+
  tbl(['Mode DTP','Description'],[
    ['Access','Force le port en access.'],['Trunk','Force le port en trunk.'],
    ['Dynamic auto','Attend que l\'autre côté propose le trunk.'],['Dynamic desirable','Tente activement de former un trunk.']
  ])+
  h3('Sécurité DTP')+ul(["Désactiver DTP sur les ports access.","Ne pas laisser un port utilisateur négocier un trunk.","Utiliser une configuration explicite."])
),

S(17,'s17','VTP','VTP VLAN propagation server client transparent révision',
  def("VTP permet de créer, synchroniser et propager les informations VLAN entre plusieurs switches Cisco dans le même domaine VTP.")+
  adv(["Gestion centralisée.","Gain de temps.","Réduction des erreurs.","Propagation automatique des VLANs."])+
  h3('Modes VTP')+
  tbl(['Mode','Description'],[
    ['<strong>Server</strong>','Crée les VLANs. Supprime les VLANs. Modifie les VLANs. Stocke dans la NVRAM. Envoie les mises à jour.'],
    ['<strong>Client</strong>','Ne crée pas les VLANs. Ne supprime pas les VLANs. Reçoit les mises à jour. Applique la base VLAN reçue.'],
    ['<strong>Transparent</strong>','Ne participe pas au domaine VTP. Ne modifie pas sa base VLAN selon VTP. Transmet les messages VTP. Permet une gestion locale des VLANs.']
  ])+
  h3('Numéro de révision VTP')+p("Indique la version de la base VLAN. Un switch accepte une annonce si le numéro de révision est plus élevé.")+
  piege(["Un switch mal configuré avec un numéro de révision élevé peut écraser la base VLAN correcte du réseau.","Avant d'ajouter un ancien switch au réseau, réinitialiser sa configuration VTP ou le mettre en mode transparent."])
),

S(18,'s18','Routage inter-VLAN','routage inter-VLAN router-on-a-stick sous-interface SVI Layer 3',
  def("Le routage inter-VLAN permet la communication entre plusieurs VLANs différents.")+
  p("Pourquoi nécessaire : Un VLAN est un domaine de broadcast séparé. Deux VLANs ne communiquent pas directement en couche 2. Il faut un équipement couche 3.")+
  h3('Rôle')+ul(["Permettre la communication entre services.","Contrôler les échanges.","Appliquer des ACL.","Améliorer la gestion.","Isoler les diffusions."])+
  h3('Méthodes')+
  tbl(['Méthode','Description','Avantage','Inconvénient'],[
    ['<strong>Classique</strong>','Chaque VLAN est relié à une interface physique du routeur.','Simple.','Peu scalable. Consomme beaucoup d\'interfaces.'],
    ['<strong>Router-on-a-stick</strong>','Une seule liaison trunk. Plusieurs sous-interfaces. Une sous-interface par VLAN. Chaque sous-interface utilise 802.1Q.','Solution économique.','Peut devenir un goulot d\'étranglement.'],
    ['<strong>Switch Layer 3</strong>','Le switch effectue le routage IP. Chaque VLAN possède une SVI. Activer le routage avec ip routing.','Meilleures performances. Routage inter-VLAN au niveau matériel.','—']
  ])+
  h3('SVI')+p("Switch Virtual Interface. Interface VLAN logique. Sert de passerelle pour les hôtes du VLAN.")+
  piege(["Router-on-a-stick = routeur + sous-interfaces.","Switch Layer 3 = SVI + ip routing.","Le switch couche 3 est plus performant."])
),

S(19,'s19','Port Security','port security MAC static dynamic sticky violation protect restrict shutdown',
  def("Port Security est une fonctionnalité de sécurité sur les commutateurs qui contrôle les équipements autorisés à se connecter à un port en se basant sur leurs adresses MAC.")+
  h3('Objectifs')+ul(["Empêcher les connexions non autorisées.","Limiter le nombre d'adresses MAC par port.","Bloquer les attaques simples de couche 2.","Réduire les risques de MAC flooding."])+
  h3('Types d\'adresses MAC sécurisées')+
  tbl(['Type','Description'],[
    ['<strong>Static secure MAC</strong>','Configurée manuellement. Adresse MAC autorisée explicitement.'],
    ['<strong>Dynamic secure MAC</strong>','Apprise automatiquement. Stockée dans la table MAC. Non conservée après redémarrage.'],
    ['<strong>Sticky secure MAC</strong>','Apprise automatiquement. Enregistrée dans la configuration. Peut rester après sauvegarde.']
  ])+
  h3('Modes de violation')+
  tbl(['Mode','Trames rejetées','Port','Alerte','Compteur'],[
    ['<strong>Protect</strong>','Oui','Reste actif','Non','Non'],
    ['<strong>Restrict</strong>','Oui','Reste actif','Oui (syslog)','Oui'],
    ['<strong>Shutdown</strong>','Oui','Désactivé (err-disabled)','Mode par défaut','Niveau de sécurité maximal']
  ])+
  piege(["Protect = silencieux.","Restrict = log + compteur.","Shutdown = port désactivé."])
),

S(20,'s20','Sécurité couche 2 LAN','sécurité MAC flooding VLAN hopping DHCP starvation spoofing ARP DAI AAA 802.1X RADIUS',
  def("La couche 2 est critique. Si la couche 2 est compromise, les couches supérieures deviennent vulnérables. Le firewall ne protège pas toujours contre les attaques internes LAN.")+
  tbl(['Attaque','Description','Protection'],[
    ['<strong>MAC Flooding</strong>','L\'attaquant envoie beaucoup de fausses MAC. La table CAM du switch se remplit. Le switch peut se comporter comme un hub. L\'attaquant peut sniffer le trafic.','Port Security.'],
    ['<strong>VLAN Hopping</strong>','L\'attaquant tente d\'accéder à un autre VLAN. Méthodes : DTP abusé ; Double tagging.','Désactiver DTP. Mettre les ports utilisateurs en access. Changer la native VLAN. Utiliser une native VLAN non utilisée. Ne pas laisser les ports inutilisés actifs.'],
    ['<strong>DHCP Starvation</strong>','L\'attaquant consomme toutes les adresses du pool DHCP. Les vrais clients ne reçoivent plus d\'adresse IP.','DHCP Snooping.'],
    ['<strong>DHCP Spoofing</strong>','Un faux serveur DHCP distribue : fausse passerelle ; faux DNS ; mauvaise configuration IP.','DHCP Snooping. Ports trusted et untrusted.'],
    ['<strong>ARP Spoofing / ARP Poisoning</strong>','L\'attaquant envoie de fausses associations IP/MAC. Peut provoquer Man-in-the-Middle.','Dynamic ARP Inspection.'],
    ['<strong>IP Spoofing</strong>','L\'attaquant falsifie une adresse IP.','IP Source Guard.'],
    ['<strong>Attaque STP</strong>','L\'attaquant tente de devenir Root Bridge. Peut modifier le chemin du trafic.','BPDU Guard. Root Guard.']
  ])+
  h3('AAA')+ul(["Authentication : Qui est l'utilisateur ?","Authorization : Que peut-il faire ?","Accounting : Qu'a-t-il fait ?"])+
  h3('802.1X')+ul(["Contrôle d'accès basé sur les ports.","Le port reste bloqué avant authentification.","Utilise souvent RADIUS."])+
  sub('Acteurs',['Supplicant : client.','Authenticator : switch ou AP.','Authentication Server : serveur RADIUS.'])
),

S(21,'s21','SSH et RSA','SSH RSA Telnet cryptage clé publique privée chiffrement',
  def("SSH est un protocole de communication sécurisée permettant d'accéder à distance à un équipement de manière chiffrée.")+
  h3('Garanties')+ul(["Confidentialité.","Authentification.","Intégrité."])+
  h3('Usage')+ul(["Administration distante.","Remplacement sécurisé de Telnet.","Accès CLI chiffré."])+
  h3('Clés SSH')+
  tbl(['Clé','Description'],[
    ['<strong>Clé publique</strong>','Partagée librement avec les autres équipements.'],
    ['<strong>Clé privée</strong>','Secrète. Stockée sur le serveur ou l\'équipement.']
  ])+
  h3('RSA')+p("RSA est une paire de clés cryptographiques utilisée en cryptographie asymétrique. Il permet de sécuriser la communication SSH.")+
  piege(["Telnet transmet en clair.","SSH chiffre la session."])
),

S(22,'s22','Routeur','routeur couche 3 table de routage next-hop longest match paquet',
  def("Un routeur est un équipement réseau de couche 3.")+
  h3('Rôles')+ul(["Relier plusieurs réseaux différents.","Acheminer les paquets.","Choisir le meilleur chemin.","Envoyer les paquets vers le réseau destination.","Séparer les domaines de diffusion."])+
  h3('Table de routage')+p("Elle contient : réseau de destination ; masque ; next-hop ; interface de sortie ; source de la route ; distance administrative ; métrique.")+
  h3('Transmission de paquets')+ul(["Le routeur reçoit le paquet.","Il lit l'adresse IP destination.","Il consulte la table de routage.","Il choisit la meilleure route.","Il envoie le paquet vers le next-hop ou l'interface de sortie."])+
  h3('Longest Match')+p("Si plusieurs routes correspondent, le routeur choisit le préfixe le plus long. Le préfixe le plus long est le plus spécifique.")+
  memo(["/26 est préféré à /18.","/18 est préféré à /12.","Route spécifique préférée à route par défaut."])
),

S(23,'s23','Concepts de routage','routage saut bande passante coût métrique distance administrative connected static OSPF RIP EIGRP BGP',
  def("Le routage est le processus qui permet aux paquets de passer d'un réseau à un autre pour atteindre leur destination.")+
  h3('Critères de choix du chemin')+ul(["Nombre de sauts.","Bande passante.","Coût.","Métrique.","Fiabilité du lien.","Distance administrative."])+
  p("Meilleur chemin : Le meilleur chemin est celui qui possède la meilleure métrique selon le protocole utilisé. En cas de sources différentes, la distance administrative départage.")+
  h3('Sources de routes — Codes importants')+
  tbl(['Code','Source'],[['C','Connected'],['L','Local'],['S','Static'],['O','OSPF'],['R','RIP'],['D','EIGRP'],['B','BGP'],['*','candidate default route']])+
  h3('Distance administrative')+p("Mesure la fiabilité de la source de route. Plus la valeur est faible, plus la route est préférée.")+
  tbl(['Source','DA'],[['Connecté','0'],['Statique','1'],['EIGRP résumé','5'],['eBGP','20'],['EIGRP interne','90'],['OSPF','110'],['IS-IS','115'],['RIP','120'],['EIGRP externe','170'],['iBGP','200']])
),

S(24,'s24','Types de routage','routage statique dynamique route par défaut récapitulative flottante',
  h3('Routage statique')+p("Configuration manuelle des routes.")+
  adv(["Simple.","Fiable.","Sécurisé.","Peu de ressources CPU/RAM."])+
  inc(["Maintenance manuelle.","Risque d'erreurs.","Ne s'adapte pas automatiquement aux pannes."])+
  h3('Routage dynamique')+p("Configuration automatique des routes via des protocoles.")+
  adv(["Flexible.","Scalable.","S'adapte aux pannes.","Met à jour la table automatiquement."])+
  inc(["Plus complexe.","Consomme des ressources.","Nécessite une bonne conception."])+
  h3('Types de routes statiques')+
  tbl(['Type','Description'],[
    ['<strong>Route standard</strong>','Vers un réseau précis.'],
    ['<strong>Route par défaut</strong>','Utilisée si aucune autre route ne correspond. IPv4 : 0.0.0.0/0. IPv6 : ::/0.'],
    ['<strong>Route récapitulative</strong>','Regroupe plusieurs réseaux en une seule route.'],
    ['<strong>Route flottante de secours</strong>','Route statique de backup. Distance administrative plus élevée. Active seulement si la route principale tombe.']
  ])
),

S(25,'s25','Mécanismes de transfert Cisco','process switching fast switching CEF FIB adjacency',
  tbl(['Mécanisme','Description'],[
    ['<strong>Process Switching</strong>','Chaque paquet est traité par le CPU. Méthode lente.'],
    ['<strong>Fast Switching</strong>','Utilise un cache. Plus rapide que process switching.'],
    ['<strong>CEF</strong>','Cisco Express Forwarding. Méthode la plus performante. Utilise : FIB ; Adjacency table.']
  ])+
  piege(["CEF est généralement activé par défaut sur les équipements Cisco modernes."])
),

S(26,'s26','OSPF','OSPF SPF link-state coût bande passante Hello LSA LSDB DBD LSR LSU LSAck',
  def("OSPF est un protocole de routage dynamique basé sur l'état de lien. Open Shortest Path First.")+
  h3('Caractéristiques')+ul(["Utilise l'algorithme SPF.","Cherche le meilleur chemin.","Convergence rapide.","Très scalable.","Sécurisé.","Supporte plusieurs zones.","Métrique basée sur le coût."])+
  inc(["Plus complexe.","Consomme CPU/RAM.","Nécessite une bonne conception."])+
  h3('Fonctionnement')+ul(["Échange de paquets Hello.","Découverte des voisins.","Échange de LSA.","Création de la LSDB.","Calcul du plus court chemin avec SPF.","Installation des meilleures routes dans la table de routage."])+
  h3('Métrique')+p("Coût basé sur la bande passante. Formule classique : Coût = 100 000 000 / bande passante en bps. Exemple : FastEthernet 100 Mbps → coût 1.")+
  h3('Types de paquets OSPF')+
  tbl(['Paquet','Nom','Rôle'],[
    ['<strong>Hello</strong>','Hello','Découvrir les voisins. Maintenir les adjacences.'],
    ['<strong>DBD</strong>','Database Description','Résumé de la base de données.'],
    ['<strong>LSR</strong>','Link State Request','Demande d\'informations spécifiques.'],
    ['<strong>LSU</strong>','Link State Update','Transporte les LSA.'],
    ['<strong>LSAck</strong>','Link State Ack','Confirme la réception des LSA.']
  ])+
  h3('LSA / LSDB')+p("LSA : Link State Advertisement. Annonce d'état de lien. LSDB : Link State Database. Base de données topologique. Doit être identique dans une même zone.")
),

S(27,'s27','OSPFv2 et OSPFv3','OSPFv2 OSPFv3 IPv4 IPv6 multicast 224 FF02 IPsec',
  tbl(['','OSPFv2','OSPFv3'],[
    ['Protocole','IPv4','IPv6'],['Activation','—','Souvent sur interface'],['Source','—','Adresse link-local'],['Multicast','224.0.0.5 ; 224.0.0.6','FF02::5 ; FF02::6']
  ])+
  h3('Prérequis IPv6')+ul(["Activer le routage IPv6.","Utiliser des adresses IPv6 correctes.","Utiliser les interfaces concernées."])+
  h3('Authentification')+p("OSPFv3 peut utiliser IPsec pour l'authentification.")
),

S(28,'s28','Router ID OSPF','Router ID loopback OSPF identification',
  def("Le Router ID identifie un routeur OSPF de manière unique.")+
  h3('Ordre de choix')+ul(["Router ID configuré manuellement.","Sinon plus haute adresse IP loopback.","Sinon plus haute adresse IP d'une interface active."])+
  p("Modification : Un changement de Router ID peut nécessiter de redémarrer le processus OSPF.")+
  piege(["Une interface loopback est souvent utilisée pour stabiliser le Router ID."])
)
]);
