import { SEOFAQ } from "./seo-faq";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const homeFAQs = [
  {
    question: "Comment fonctionne DogWalking pour trouver un promeneur ?",
    answer: "Consultez les Profils, Avis et Tarifs des Accompagnateurs disponibles près de chez vous. Le paiement est sécurisé et bloqué jusqu’à la fin de la prestation, après validation via un code à usage unique. Choisissez ensuite le type de service (Promenade, Garde, Visite, ...), entrez votre adresse et sélectionnez un ou plusieurs Accompagnateurs : votre demande est envoyée et reste en attente de leur confirmation. Vous pouvez également déposer une annonce libre en définissant votre budget et vos conditions ; vous recevrez plusieurs propositions de prestataires et pourrez choisir le profil le plus adapté."
  },
  {
    question: "Les promeneurs sont-ils vraiment vérifiés ?",
    answer: "Absolument. Chaque Collaborateur passe par un processus de sélection rigoureux, avec une vérification manuelle de chaque profil par notre équipe. Cela inclut la validation des informations personnelles, de la pièce d’identité, des formations et autres éléments de vérification. Seuls 35 % des candidats sont acceptés. Vous pouvez confier votre compagnon en toute sérénité."
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait de la prestation ?",
    answer: "Grâce à notre système de paiement sécurisé, votre argent reste bloqué jusqu’à validation de la prestation. Seul le Propriétaire détient un code à usage unique, qu’il communique à l’Accompagnateur à la fin du service pour débloquer le paiement. Si le Prestataire n’envoie pas de preuve photo/vidéo et un commentaire, ou si la prestation ne correspond pas à vos attentes, vous pouvez contester et être remboursé. Notre équipe support intervient sous 48 h en cas de litige."
  },
  {
    question: "Quels types de services propose DogWalking ?",
    answer: "Nous proposons une Gamme Complète : Promenade, Visite à votre domicile, Garde (garderie), hébergement chez le promeneur ou le Propriétaire, visite sanitaire (toilettage léger), gestion multi-animaux et accompagnement vétérinaire. La durée de chaque service est librement définie d’un commun accord entre le Propriétaire et l’Accompagnateur (minutes, heures, jours, nuits…). Vous avez également la possibilité de déposer des annonces particulières, détaillées selon vos besoins. Chaque service est adapté aux besoins spécifiques de votre animal."
  },
  {
    question: "DogWalking est-il disponible dans ma ville ?",
    answer: "DogWalking couvre l'ensemble du territoire français avec une présence renforcée en Île-de-France et dans les grandes métropoles (Lyon, Marseille, Bordeaux, Toulouse, Nantes, Lille). Entrez votre adresse sur notre plateforme pour découvrir les promeneurs disponibles autour de vous. Notre réseau s'étend chaque jour."
  }
];

export const HomeFAQSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur DogWalking, la plateforme bientôt n°1 
            de promenade, de garde et d’accompagnement de chiens, chats et de tous les animaux
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <SEOFAQ faqs={homeFAQs} />
        </div>
      </div>
    </section>
  );
};
