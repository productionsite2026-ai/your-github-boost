import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { SEOHead } from "@/components/ui/seo-head";
import { SEOFAQ } from "@/components/ui/seo-faq";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ClientReviews } from "@/components/ui/client-reviews";
import { CaseStudies } from "@/components/ui/case-studies";
import { getReviewsByService, getCaseStudiesByService } from "@/data/clientReviewsData";
import { 
  Dog, Clock, Shield, Camera, MapPin, Heart, Star, 
  CheckCircle, ArrowRight, Users, Zap, Calendar, Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import servicePromenadeImg from "@/assets/service-promenade.jpg";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ExpertBio } from "@/components/ui/expert-bio";
import { getExpertsByExpertise } from "@/data/expertsData";

// Données pour reviews et case studies
const reviews = getReviewsByService("promenade");
const caseStudies = getCaseStudiesByService("promenade");

const promenadeFAQs = [
  {
    question: "Combien de temps dure une promenade de chien standard avec DogWalking ?",
    answer: "Nos promenades durent entre 30 minutes et 2 heures selon vos besoins. La durée la plus demandée est de 45 minutes à 1 heure, idéale pour une bonne dépense d'énergie. Chaque promeneur affiche ses créneaux disponibles sur son profil."
  },
  {
    question: "Mon chien peut-il être promené avec d'autres chiens ?",
    answer: "Cela dépend du promeneur choisi. Certains proposent des promenades individuelles exclusives, d'autres des balades en petit groupe (2-3 chiens maximum). Cette information est clairement visible sur chaque profil. Pour les chiens réactifs ou avec des besoins spécifiques, privilégiez les promenades individuelles."
  },
  {
    question: "Comment le promeneur récupère-t-il mon chien ?",
    answer: "Vous convenez d'un point de rendez-vous avec le promeneur, généralement à votre domicile. Vous pouvez confier les clés si vous êtes absent, ou remettre votre compagnon en main propre. La laisse et le collier restent avec votre chien pendant toute la promenade."
  },
  {
    question: "Que se passe-t-il en cas de mauvais temps ?",
    answer: "Les promenades ont lieu par tous les temps, sauf conditions extrêmes (canicule au-delà de 35°C, tempête, verglas dangereux). En cas de météo défavorable, le promeneur peut proposer un report ou une adaptation. La sécurité de votre chien reste toujours la priorité absolue."
  },
  {
    question: "Puis-je suivre la promenade de mon chien en temps réel ?",
    answer: "Chaque promeneur envoie obligatoirement des preuves photo et vidéo pendant et après la promenade via notre plateforme sécurisée. Vous recevez une notification à chaque envoi. La plupart des promeneurs partagent plusieurs photos tout au long de la balade pour votre tranquillité."
  },
  {
    question: "Mon chien a des besoins médicaux, est-ce possible ?",
    answer: "Absolument. Lors de la réservation, vous pouvez indiquer tous les besoins spécifiques : médicaments à administrer, restrictions alimentaires, problèmes de mobilité. Le promeneur confirme qu'il peut gérer ces besoins avant d'accepter. Utilisez la messagerie pour discuter des détails."
  }
];

const ServicePromenade = () => {
  const navigate = useNavigate();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Promenade de Chien Professionnelle",
    "description": "Service de promenade de chien par des promeneurs professionnels vérifiés. Promenades individuelles ou en petit groupe, avec preuves photo obligatoires et protection incluse.",
    "provider": {
      "@type": "Organization",
      "name": "DogWalking",
      "url": "https://dogwalking.fr"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Options de promenade",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Promenade 30 minutes",
          "price": "8",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "name": "Promenade 1 heure",
          "price": "15",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "name": "Promenade 2 heures",
          "price": "25",
          "priceCurrency": "EUR"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Promenade de Chien | Promeneurs Professionnels Vérifiés | DogWalking"
        description="Service de promenade de chien par des professionnels vérifiés partout en France. Preuves photo obligatoires, protection incluse, paiement sécurisé. Réservez dès 8€."
        keywords="promenade chien, dog walking, promeneur canin, balade chien, sortie chien, promeneur professionnel, dog walker france"
        canonicalUrl="https://dogwalking.fr/services/promenade"
        structuredData={serviceJsonLd}
        ogImage={servicePromenadeImg}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <Dog className="w-3 h-3 mr-1" />
                  Service n°1 en France
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Promenade de Chien par des <span className="text-primary">Professionnels Vérifiés</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Offrez à votre compagnon des promenades enrichissantes avec des promeneurs passionnés et certifiés. 
                  Exercice quotidien, socialisation et bien-être garantis partout en France.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => navigate("/walkers?service=promenade")}>
                    Trouver un promeneur
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => navigate("/tarifs")}>
                    Voir les tarifs
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Protection incluse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-primary" />
                    <span>Preuves photo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Avis vérifiés</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={servicePromenadeImg} 
                  alt="Promeneur professionnel avec un chien heureux dans un parc en automne" 
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">2 500+</p>
                      <p className="text-sm text-muted-foreground">Promeneurs actifs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir nos promenades */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi Choisir DogWalking pour la Promenade de Votre Chien ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nous avons révolutionné la promenade canine en combinant technologie, sécurité et passion pour les animaux. 
                Chaque balade est une expérience unique et sécurisée pour votre compagnon.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Promeneurs 100% Vérifiés</h3>
                  <p className="text-muted-foreground">
                    Chaque promeneur fournit une pièce d'identité, une vérification approfondie et une protection professionnelle. 
                    Notre équipe vérifie manuellement chaque candidature avant validation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Preuves Photo Obligatoires</h3>
                  <p className="text-muted-foreground">
                    À chaque promenade, le promeneur envoie des photos et vidéos de votre chien via notre application sécurisée. 
                    Vous suivez les aventures de votre compagnon en temps réel.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Paiement Sécurisé</h3>
                  <p className="text-muted-foreground">
                    Votre paiement est bloqué jusqu'à réception des preuves photo. Sans validation, vous êtes automatiquement remboursé. 
                    Une sécurité unique sur le marché français.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Promenades Personnalisées</h3>
                  <p className="text-muted-foreground">
                    Chaque chien est unique. Nos promeneurs adaptent l'intensité, la durée et le parcours aux besoins spécifiques 
                    de votre animal : chiot, senior, athlétique ou calme.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Promeneurs de Proximité</h3>
                  <p className="text-muted-foreground">
                    Trouvez un promeneur qualifié dans votre quartier. Notre algorithme géolocalise les professionnels 
                    les plus proches pour un service rapide et pratique.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Protection Complète</h3>
                  <p className="text-muted-foreground">
                    Chaque mission est protégée et suivie de bout en bout. En cas d'incident, notre équipe gère toutes les démarches pour vous.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comment Réserver une Promenade en 3 Étapes ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Réserver une promenade pour votre chien n'a jamais été aussi simple et sécurisé.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Trouvez Votre Promeneur</h3>
                <p className="text-muted-foreground">
                  Recherchez parmi nos promeneurs vérifiés près de chez vous. Consultez les avis, tarifs et disponibilités 
                  de chaque professionnel avant de faire votre choix.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Réservez en Ligne</h3>
                <p className="text-muted-foreground">
                  Sélectionnez la date, l'heure et la durée de promenade souhaitées. Ajoutez les informations 
                  sur votre chien et validez votre réservation en toute sécurité.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Recevez les Preuves</h3>
                <p className="text-muted-foreground">
                  Le jour de la promenade, recevez des photos et vidéos de votre compagnon en balade. 
                  Le paiement est libéré automatiquement après validation.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" onClick={() => navigate("/walkers?service=promenade")}>
                Réserver une promenade maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Types de promenades */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Des Promenades Adaptées à Chaque Chien
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Que votre chien soit un chiot énergique ou un senior tranquille, nous avons la promenade parfaite pour lui.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🐕</div>
                  <h3 className="font-bold mb-2">Promenade Courte</h3>
                  <p className="text-sm text-muted-foreground mb-2">30 minutes</p>
                  <p className="text-2xl font-bold text-primary">dès 8€</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Idéale pour les sorties rapides et les besoins quotidiens
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-primary">
                <CardContent className="p-6">
                  <Badge className="mb-2">Populaire</Badge>
                  <div className="text-4xl mb-4">🐕‍🦺</div>
                  <h3 className="font-bold mb-2">Promenade Standard</h3>
                  <p className="text-sm text-muted-foreground mb-2">45 min - 1h</p>
                  <p className="text-2xl font-bold text-primary">dès 12€</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Le parfait équilibre entre exercice et exploration
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🏃</div>
                  <h3 className="font-bold mb-2">Grande Balade</h3>
                  <p className="text-sm text-muted-foreground mb-2">1h30 - 2h</p>
                  <p className="text-2xl font-bold text-primary">dès 20€</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Pour les chiens sportifs qui ont besoin de se dépenser
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🐾</div>
                  <h3 className="font-bold mb-2">Promenade Groupe</h3>
                  <p className="text-sm text-muted-foreground mb-2">1h en groupe</p>
                  <p className="text-2xl font-bold text-primary">dès 10€</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Socialisation avec 2-3 autres chiens compatibles
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Avantages pour le chien */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Les Bienfaits d'une Promenade Régulière pour Votre Chien
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Une promenade quotidienne n'est pas un luxe, c'est un besoin fondamental pour l'équilibre physique 
                  et mental de votre compagnon. Nos promeneurs professionnels offrent bien plus qu'une simple sortie.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Dépense d'Énergie Optimale</h4>
                      <p className="text-muted-foreground">
                        Un chien bien promené est un chien calme à la maison. Réduction des comportements destructeurs 
                        et de l'anxiété grâce à une activité physique adaptée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Stimulation Mentale</h4>
                      <p className="text-muted-foreground">
                        Nouvelles odeurs, nouveaux environnements, nouvelles rencontres. Chaque promenade est une aventure 
                        sensorielle qui enrichit la vie de votre chien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Socialisation Positive</h4>
                      <p className="text-muted-foreground">
                        Rencontres avec d'autres chiens et humains dans un cadre contrôlé. Amélioration du comportement 
                        social et de la confiance de votre animal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Maintien en Bonne Santé</h4>
                      <p className="text-muted-foreground">
                        Prévention de l'obésité, renforcement cardiovasculaire, maintien de la mobilité articulaire. 
                        La promenade est le meilleur médicament préventif.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border">
                <h3 className="text-2xl font-bold mb-6 text-center">Ce que nos clients disent</h3>
                <div className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-xl">
                    <div className="flex items-center gap-1 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-sm italic mb-2">
                      "Depuis que Max est promené par Sophie, il est beaucoup plus calme le soir. Les photos qu'elle m'envoie me rassurent vraiment."
                    </p>
                    <p className="text-xs text-muted-foreground">— Marie D., Paris 15e</p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-xl">
                    <div className="flex items-center gap-1 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-sm italic mb-2">
                      "Service impeccable ! Mon golden adore ses promenades quotidiennes. Le système de preuves photo est génial pour suivre ses aventures."
                    </p>
                    <p className="text-xs text-muted-foreground">— Thomas L., Lyon 6e</p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-xl">
                    <div className="flex items-center gap-1 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-sm italic mb-2">
                      "Enfin une plateforme sérieuse ! Le paiement sécurisé et la vérification des promeneurs m'ont convaincue."
                    </p>
                    <p className="text-xs text-muted-foreground">— Nathalie R., Bordeaux</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Preuves de Confiance (E-E-A-T) */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi Faire Confiance a DogWalking pour la Promenade ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nos garanties de confiance et de securite sont sans equivalent en France.
              </p>
            </div>
            <TrustBadges />
          </div>
        </section>

        {/* FAQ */}
        <SEOFAQ 
          title="Questions Fréquentes sur la Promenade de Chien"
          subtitle="Tout ce que vous devez savoir avant de réserver une promenade"
          faqs={promenadeFAQs}
          className="bg-muted/30"
        />

        {/* CTA Final */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à Offrir des Promenades de Qualité à Votre Chien ?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Rejoignez les milliers de propriétaires qui font confiance à DogWalking pour le bien-être de leur compagnon.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate("/walkers?service=promenade")}
              >
                Trouver un promeneur
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => navigate("/walker/register")}
              >
                Devenir promeneur
              </Button>
            </div>
          </div>
        </section>
      </main>
        {/* Client Reviews Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <ClientReviews reviews={reviews} />
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <CaseStudies studies={caseStudies} />
          </div>
        </section>


      <Footer />
    </div>
  );
};

export default ServicePromenade;
