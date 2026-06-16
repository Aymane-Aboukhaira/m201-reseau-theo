addSections([
S(29,'s29','Zones OSPF multiples','zone OSPF area backbone ABR ASBR interne multi-access',
  def("OSPF peut diviser un grand réseau en plusieurs zones.")+
  h3('Objectifs')+ul(["Réduire le nombre de LSA.","Limiter les calculs SPF.","Améliorer les performances.","Faciliter la scalabilité."])+
  h3('Zone 0')+p("Zone backbone. Zone principale. Toutes les autres zones doivent normalement être connectées à la zone 0.")+
  h3('Types de routeurs OSPF')+
  tbl(['Type','Description'],[
    ['<strong>Routeur interne</strong>','Toutes ses interfaces OSPF sont dans la même zone.'],
    ['<strong>Backbone Router</strong>','Possède au moins une interface dans la zone 0.'],
    ['<strong>ABR</strong>','Area Border Router. Connecte plusieurs zones. Relie une zone à une autre zone ou à la zone 0.'],
    ['<strong>ASBR</strong>','Autonomous System Boundary Router. Connecte OSPF à un autre système autonome ou à un autre protocole.']
  ])+
  h3('Types de réseaux OSPF')+ul(["Point-to-point.","Multi-access.","Broadcast : réseau Ethernet classique."])
),

S(30,'s30','DR / BDR','DR BDR DROther designated router élection priorité',
  def("DR et BDR optimisent la communication OSPF dans les réseaux multi-access.")+
  tbl(['Rôle','Description'],[
    ['<strong>DR</strong>','Designated Router. Routeur principal. Centralise les échanges OSPF. Redistribue les LSA.'],
    ['<strong>BDR</strong>','Backup Designated Router. Secours du DR. Prend le rôle du DR si celui-ci tombe.'],
    ['<strong>DROther</strong>','Les autres routeurs. Ni DR ni BDR. Échangent principalement avec DR/BDR.']
  ])+
  h3('Élection DR/BDR')+ul(["Priorité la plus élevée.","En cas d'égalité : Router ID le plus élevé.","Un routeur avec priorité 0 ne devient jamais DR/BDR."])
),

S(31,'s31','EIGRP','EIGRP DUAL hybride distance vector Cisco bande passante délai',
  def("EIGRP est un protocole hybride. Distance vector. État de lien. Développé par Cisco.")+
  h3('Algorithme')+p("DUAL. Choisit le meilleur chemin. Permet des mises à jour partielles.")+
  h3('Métrique')+ul(["Bande passante.","Délai."])+
  adv(["Facile à configurer.","Convergence rapide.","Mises à jour partielles."])+
  p("Note : Historiquement Cisco uniquement.")
),

S(32,'s32','BGP','BGP EGP path vector AS ASN iBGP eBGP TCP 179 OPEN KEEPALIVE UPDATE NOTIFICATION',
  def("BGP est un protocole de routage utilisé pour échanger des routes entre différents systèmes autonomes sur Internet. Border Gateway Protocol.")+
  p("Type : EGP. Path Vector. Utilise TCP port 179.")+
  h3('Caractéristiques')+ul(["Très stable.","Lent à converger.","Utilise l'AS Path.","Orienté politique de routage.","Utilisé pour Internet et grands réseaux."])+
  h3('AS / ASN')+p("Autonomous System. Ensemble de réseaux IP et routeurs administrés par une même organisation avec une politique de routage commune. ASN identifie un AS.")+
  tbl(['','iBGP','eBGP'],[['Portée','BGP interne. Même AS.','BGP externe. AS différents.']])+
  h3('Messages BGP')+
  tbl(['Message','Rôle'],[['OPEN','Établit la session BGP.'],['KEEPALIVE','Maintient la session.'],['UPDATE','Annonce ou retire des routes.'],['NOTIFICATION','Signale une erreur et ferme la session.']])+
  h3('Attributs BGP')+ul(["AS-Path.","Next-Hop.","Origin.","Local Preference.","MED.","Community."])+
  h3('Quand utiliser BGP')+ul(["Plusieurs connexions Internet.","Plusieurs AS.","Besoin de contrôler les chemins.","Politique de routage complexe."])+
  piege(["Une seule connexion Internet simple = route par défaut statique suffisante."])
),

S(33,'s33','STP — Spanning Tree Protocol','STP spanning tree boucle BPDU Bridge ID priorité root bridge coût RSTP PVST',
  def("STP est un protocole de couche 2 utilisé sur les switches pour éviter les boucles dans un réseau.")+
  h3('Rôles')+ul(["Détecter les boucles.","Bloquer automatiquement certains ports.","Assurer la redondance des liens.","Éviter la perte de disponibilité.","Créer une topologie logique sans boucle."])+
  h3('Problème des boucles couche 2')+ul(["Pas de TTL en Ethernet.","Les broadcasts peuvent tourner indéfiniment.","La table MAC devient instable.","Les trames peuvent être dupliquées.","Le réseau peut devenir inutilisable."])+
  h3('BPDU')+p("Bridge Protocol Data Unit. Message utilisé par STP. Contenu visible : Priority. MAC. System ID. VLAN ID.")+
  h3('Bridge ID')+p("Identifie un switch dans STP. Composition : Priorité STP. Adresse MAC. System ID / VLAN selon les variantes.")+
  h3('Priorité STP')+ul(["Valeurs par incréments de 4096.","Valeur par défaut visible : 32769.","La priorité la plus basse gagne.","Si priorité égale : MAC la plus basse gagne."])+
  h3('Pont racine / Root Bridge')+p("Switch central de référence STP. Élu avec le Bridge ID le plus faible.")+
  h3('Coût de chemin')+tbl(['Lien','Coût'],[['FastEthernet','19'],['GigabitEthernet','4']])+
  p("Le plus petit coût vers le Root Bridge est préféré.")+
  h3('Versions STP')+ul(["STP.","RSTP.","PVST.","PVST+.","Rapid PVST+.","MSTP."])
),

S(34,'s34','Rôles et états STP','root port designated alternate blocking listening learning forwarding PortFast BPDU Guard',
  h3('Rôles de ports')+
  tbl(['Rôle','Description'],[
    ['<strong>Root Port</strong>','Meilleur chemin vers le pont racine. Existe sur les switches non-root.'],
    ['<strong>Designated Port</strong>','Port désigné sur un segment. Transmet les trames sur le segment.'],
    ['<strong>Alternate Port</strong>','Port de secours. Bloqué pour éviter une boucle. Peut devenir actif en cas de panne.']
  ])+
  h3('États STP classiques')+
  tbl(['État','Description'],[
    ['Blocking','Ne transmet pas de trafic utilisateur. Reçoit les BPDU.'],
    ['Listening','Écoute les BPDU. Participe au calcul STP.'],
    ['Learning','Apprend les adresses MAC. Ne transmet pas encore le trafic utilisateur.'],
    ['Forwarding','Transmet le trafic normalement.'],
    ['Disabled','Port désactivé.']
  ])+
  h3('Convergence STP classique')+p("Environ 50 secondes. 20 s Max Age. 15 s Listening. 15 s Learning.")+
  h3('RSTP')+p("Rapid Spanning Tree Protocol. Convergence plus rapide que STP classique.")+
  h3('PVST+')+p("Une instance STP par VLAN. Permet une topologie différente par VLAN. Peut aider à équilibrer la charge.")+
  h3('Rapid PVST+')+p("Version Cisco rapide basée sur RSTP. Une instance rapide par VLAN.")+
  h3('PortFast')+p("Permet à un port access de passer rapidement en forwarding. Utilisé seulement vers : PC ; imprimante ; serveur ; téléphone IP.")+
  piege(["Ne jamais activer PortFast vers un autre switch."])+
  h3('BPDU Guard')+p("Protège les ports PortFast. Si une BPDU est reçue, le port passe en err-disabled. Empêche le branchement d'un switch non autorisé.")
),

S(35,'s35','EtherChannel','EtherChannel PAgP LACP lien logique bande passante',
  def("EtherChannel regroupe plusieurs liens physiques entre deux équipements pour former un seul lien logique.")+
  adv(["Augmente la bande passante.","Évite le blocage par STP.","Améliore la disponibilité réseau.","Assure la redondance.","Simplifie la topologie STP."])+
  h3('Fonctionnement')+ul(["Plusieurs liens physiques sont vus comme un seul lien logique.","La configuration se fait sur l'interface Port-Channel.","STP voit le canal comme un seul lien."])+
  h3('Conditions de cohérence')+ul(["Même vitesse.","Même duplex.","Même mode access ou trunk.","Même VLAN access.","Même native VLAN.","Même liste de VLANs autorisés.","Même type d'interface."])+
  h3('Protocoles')+
  tbl(['Protocole','Standard','Modes'],[
    ['<strong>PAgP</strong>','Cisco','auto ; desirable'],
    ['<strong>LACP</strong>','IEEE','active ; passive']
  ])+
  h3('Combinaisons PAgP')+ul(["Desirable + desirable = fonctionne.","Desirable + auto = fonctionne.","Auto + auto = ne fonctionne pas."])+
  h3('Combinaisons LACP')+ul(["Active + active = fonctionne.","Active + passive = fonctionne.","Passive + passive = ne fonctionne pas."])+
  piege(["Deux côtés passifs ne forment pas EtherChannel.","Deux côtés auto ne forment pas PAgP."])
),

S(36,'s36','FHRP — First Hop Redundancy Protocol','FHRP HSRP VRRP GLBP passerelle virtuelle redondance preempt',
  def("FHRP est une famille de protocoles de redondance qui assure la disponibilité de la passerelle par défaut.")+
  p("Problème résolu : Les hôtes ont une seule passerelle par défaut. Si cette passerelle tombe, ils perdent l'accès aux réseaux externes.")+
  h3('Fonction')+ul(["Fournir une passerelle virtuelle commune.","Assurer la continuité en cas de panne.","Utiliser une IP virtuelle.","Utiliser une MAC virtuelle."])+
  h3('Protocoles FHRP')+
  tbl(['Protocole','Standard','Rôles'],[
    ['<strong>HSRP</strong>','Cisco','active ; standby'],
    ['<strong>VRRP</strong>','Standard','master ; backup'],
    ['<strong>GLBP</strong>','Cisco','AVG ; AVF. Permet à plusieurs routeurs de transmettre les paquets simultanément.']
  ])+
  h3('HSRP détails')+ul(["Priorité : Valeur par défaut : 100. La priorité la plus haute devient active. En égalité, l'adresse IP la plus élevée gagne.","Preempt : Permet au routeur le plus prioritaire de redevenir actif après son retour.","Timers : Hello : 3 secondes. Hold / Dead : 10 secondes.","MAC virtuelle : Forme typique : 0000.0C07.ACXX. XX correspond au groupe HSRP en hexadécimal."])+
  piege(["HSRP / VRRP = redondance de passerelle.","GLBP = redondance + équilibrage de charge."])
),

S(37,'s37','DHCP','DHCP DORA Discover Offer Request ACK bail réservation relais helper',
  def("DHCP est un protocole réseau qui attribue automatiquement une adresse IP et des paramètres réseau aux appareils. Dynamic Host Configuration Protocol.")+
  h3('Paramètres fournis')+ul(["Adresse IP.","Masque.","Passerelle.","DNS.","Durée du bail.","Domaine.","Options spécifiques."])+
  adv(["Gestion centralisée.","Simplifie la gestion.","Évite les conflits d'adresses.","Évite la répétition manuelle.","Réduit les erreurs."])+
  p("Ports : Serveur DHCP : UDP 67. Client DHCP : UDP 68.")+
  h3('Processus DORA')+
  tbl(['Étape','Description'],[
    ['<strong>Discover</strong>','Le client envoie une requête broadcast. Il cherche un serveur DHCP.'],
    ['<strong>Offer</strong>','Le serveur DHCP répond par une offre. Il propose une adresse IP.'],
    ['<strong>Request</strong>','Le client demande l\'adresse proposée. Il confirme son choix.'],
    ['<strong>ACK</strong>','Le serveur confirme l\'attribution. Le bail devient actif.']
  ])+
  h3('Bail DHCP')+p("Adresse louée pour une durée limitée. Le client doit renouveler son bail.")+
  h3('Réservation DHCP')+p("Attribue toujours la même adresse à un équipement. Basée sur l'adresse MAC. Utile pour : imprimantes ; serveurs ; téléphones IP ; équipements réseau.")+
  h3('Relais DHCP')+p("Nécessaire si le serveur DHCP est dans un autre réseau. Les broadcasts DHCP ne traversent pas les routeurs. Le routeur relaie vers le serveur DHCP avec ip helper-address.")
),

S(38,'s38','SLAAC et DHCPv6','SLAAC DHCPv6 RS RA DAD EUI-64 flag M O stateless stateful',
  h3('SLAAC')+def("Stateless Address Autoconfiguration. Permet à un hôte de générer automatiquement son adresse IPv6 sans DHCPv6 complet.")+
  h3('Fonctionnement SLAAC')+ul(["Le client envoie RS.","Le routeur répond avec RA.","Le RA contient le préfixe réseau.","L'hôte génère la partie interface ID.","L'hôte vérifie l'unicité avec DAD."])+
  tbl(['Message','Nom','Description'],[
    ['RS','Router Solicitation','Message envoyé par le client pour demander des informations.'],
    ['RA','Router Advertisement','Message envoyé par le routeur avec les informations nécessaires.'],
    ['DAD','Duplicate Address Detection','Vérifie que l\'adresse IPv6 générée n\'est pas déjà utilisée.']
  ])+
  h3('EUI-64')+ul(["Méthode pour générer l'identifiant d'interface.","Utilise l'adresse MAC.","Insère FFFE.","Inverse le 7e bit."])+
  h3('Flags IPv6')+tbl(['Flag','Description'],[['M','Indique si l\'hôte utilise DHCPv6 pour obtenir une adresse IPv6.'],['O','Indique si l\'hôte utilise DHCPv6 pour obtenir des informations complémentaires.']])+
  h3('DHCPv6 Stateless')+p("SLAAC donne l'adresse. DHCPv6 donne seulement les options complémentaires comme DNS.")+
  h3('DHCPv6 Stateful')+p("DHCPv6 donne l'adresse IPv6 et les paramètres. Fonctionnement proche de DHCPv4.")
)
]);
