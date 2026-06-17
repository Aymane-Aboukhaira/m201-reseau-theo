addM203Sections([
S(28, 's28', 'VNI', 'vni',
  def('VNI signifie VXLAN Network Identifier.')+
  h3('Taille')+
  p('24 bits.')+
  h3('Rôle')+
  ul(['Identifier le réseau virtuel VXLAN.','Séparer les tenants.','Distinguer les segments overlay.'])+
  h3('Exemple')+
  p('VNI 10010 = réseau Finance. VNI 10020 = réseau RH.')+
  piege(['VNI dans VXLAN joue un rôle comparable au VLAN ID, mais avec une scalabilité beaucoup plus grande.','---'])
),
S(29, 's29', 'VTEP', 'vtep',
  def('VTEP signifie VXLAN Tunnel Endpoint.')+
  h3('Rôle')+
  ul(['Encapsuler les trames Ethernet dans VXLAN.','Décapsuler les paquets VXLAN.','Faire la jonction entre réseau overlay et underlay.'])+
  h3('Où se trouve le VTEP')+
  p('Dans un hyperviseur. Dans un switch ToR. Dans un équipement réseau supportant VXLAN.')+
  h3('Fonctionnement')+
  ul(['Reçoit une trame Ethernet.','Ajoute l\u2019en-tête VXLAN avec VNI.','Ajoute UDP.','Ajoute IP.','Envoie vers le VTEP distant.','Le VTEP distant décapsule.','Il remet la trame originale au bon réseau virtuel.'])
),
S(30, 's30', 'MAC-in-UDP', 'mac-in-udp',
  def('MAC-in-UDP est le principe d\u2019encapsulation VXLAN.')+
  h3('Fonctionnement')+
  p('Une trame Ethernet complète est encapsulée dans VXLAN. VXLAN est encapsulé dans UDP. UDP est encapsulé dans IP. Le réseau underlay route le paquet IP.')+
  h3('Structure simplifiée')+
  ul(['Trame Ethernet originale.','En-tête VXLAN.','En-tête UDP.','En-tête IP.','En-tête Ethernet underlay.'])+
  piege(['L\u2019underlay ne voit pas les MAC originales des VMs comme destination principale. Il route entre IP des VTEP.','---'])
),
S(31, 's31', 'Communication VXLAN entre deux VMs', 'communication vxlan entre deux vms',
  h3('Scénario')+
  p('VM1 sur hyperviseur A veut communiquer avec VM2 sur hyperviseur B.')+
  h3('Étapes')+
  ul(['VM1 génère une trame Ethernet.','VTEP A reçoit la trame.','VTEP A identifie le VNI.','VTEP A encapsule avec VXLAN.','VTEP A ajoute UDP et IP.','L\u2019underlay route le paquet vers VTEP B.','VTEP B reçoit le paquet.','VTEP B vérifie le VNI.','VTEP B décapsule.','VTEP B transmet la trame originale à VM2.'])+
  h3('Résultat')+
  p('VM1 et VM2 communiquent comme si elles étaient dans le même LAN, même si elles sont sur des hyperviseurs différents. Le corrigé SDN décrit précisément ce scénario VXLAN avec VTEP A, VTEP B, VNI, UDP 4789, underlay et décapsulation.')
),
S(32, 's32', 'Pourquoi VXLAN utilise UDP', 'pourquoi vxlan utilise udp',
  h3('Raison')+
  ul(['UDP permet un transport simple sans connexion.','UDP facilite l\u2019équilibrage ECMP dans l\u2019underlay.','Les équipements peuvent utiliser les ports UDP pour répartir le trafic.'])+
  h3('Pas TCP')+
  p('TCP ajouterait de la lourdeur. TCP créerait des problèmes de double contrôle de congestion. VXLAN transporte déjà des flux qui peuvent eux-mêmes être TCP.')+
  piege(['VXLAN utilise UDP pour scalabilité et ECMP, pas parce qu\u2019il veut garantir la livraison.','---'])
),
S(33, 's33', 'ECMP et Jumbo Frames', 'ecmp et jumbo frames',
  h3('ECMP')+
  ul(['Equal-Cost Multi-Path.','Permet d\u2019utiliser plusieurs chemins de coût égal dans l\u2019underlay.'])+
  h4('Rôle')+
  p('Répartir le trafic VXLAN. Améliorer la bande passante. Améliorer la résilience.')+
  h3('Jumbo Frames')+
  ul(['Trames de grande taille.','Utiles car VXLAN ajoute de l\u2019encapsulation.'])+
  h4('Rôle')+
  p('Éviter la fragmentation. Supporter l\u2019overhead VXLAN. Améliorer les performances.')+
  piege(['VXLAN augmente la taille du paquet. Il faut adapter la MTU dans l\u2019underlay.','---'])
),
S(34, 's34', 'VLAN vs VXLAN', 'vlan vs vxlan',
  h3('VLAN')+
  ul(['12 bits.','Environ 4096 VLANs.','Couche 2 traditionnelle.','Adapté à réseaux plus petits.','Limité en scalabilité datacenter.'])+
  h3('VXLAN')+
  ul(['24 bits.','Environ 16 millions de réseaux virtuels.','Overlay L2 sur L3.','Adapté aux datacenters et clouds.','Meilleure scalabilité multi-tenant.'])+
  h3('Comparaison simple')+
  p('VLAN = segmentation traditionnelle. VXLAN = segmentation massive pour cloud/datacenter.')+
  piege(['VXLAN n\u2019est pas juste “un VLAN plus grand”. VXLAN est une encapsulation overlay au-dessus d\u2019un réseau IP.','---'])
),
S(35, 's35', 'NVGRE et Geneve', 'nvgre et geneve',
  h3('NVGRE')+
  ul(['Network Virtualization using Generic Routing Encapsulation.','Technologie overlay.','Utilise GRE.','Associée historiquement à Microsoft.'])+
  h3('Geneve')+
  ul(['Generic Network Virtualization Encapsulation.','Technologie overlay moderne.','Flexible et extensible.'])+
  h3('Comparaison')+
  p('VXLAN = très utilisé dans datacenters et clouds. NVGRE = overlay via GRE. Geneve = plus extensible pour environnements modernes.')
),
S(36, 's36', 'Limites du WAN traditionnel', 'limites du wan traditionnel',
  h3('Problèmes')+
  ul(['Dépendance à MPLS coûteux.','Configuration manuelle.','Peu de flexibilité.','Mauvaise visibilité applicative.','Changement lent.','Difficulté à gérer plusieurs liens.','Failover parfois complexe.'])+
  h3('Besoin moderne')+
  ul(['Utiliser plusieurs liens.','Optimiser par application.','Réduire les coûts.','Améliorer la disponibilité.','Centraliser les politiques.'])
)
]);
