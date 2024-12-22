import Content from '@/components/base/content/Content';
import Heading from '@/components/base/heading/Heading';
import TextImage from '@/components/base/text-and-image/TextImage';
import { images } from '@/config/images';

import './page.css';

export default function ThingsToDoInCalabria() {
  return (
    <div className="things-to-do-page page">
      <Content backgroundColor="#332c2a">
        <section className="things-to-do-section">
          <Heading level={2} color="#FFECD9">Things to Do in Calabria</Heading>
          <TextImage
            imageUrl={images.tropea}
            imageAlt="Tropea"
            title={`"Coast of the Gods"`}
            text="You can't miss Costa degli Dei, or 'Coast of the Gods,' when you're in Calabria! Very close to our wedding venue, this breathtaking spot is all about stunning beaches and beautiful views. Renowned for its crystal-clear waters and dramatic cliffs, this coastal paradise features idyllic beaches like those in Tropea, Capo Vaticano, Pizzo, Briatico, and Zambrone, where soft sands meet the azure sea. Explore the vibrant old town of Tropea, where you’ll find charming streets and delicious local food—make sure to try the famous red onions! If you swing by Pizzo, don’t miss out on its renowned tartufo ice cream! And for a more secluded beach experience, check out the hidden coves along the coast, like Paradiso del Sub and Spiaggia di Michelino.."
            imagePosition="right"
          />
          <TextImage
            imageUrl={images.scilla}
            imageAlt="Scilla"
            title="Scilla"
            text="Heading south along the Tyrrhenian coast, you’ll discover Scilla, a picturesque fishing village where you can enjoy fresh seafood and stunning views—on a clear day, you might even spot Sicily across the water! Take some time to wander its narrow streets and soak up the local legends."
            imagePosition="left"
          />

          <TextImage
            imageUrl={images.arcella}
            imageAlt="San Nicola Arcella"
            title="San Nicola Arcella"
            text="If you have time, visit San Nicola Arcella, a small town overlooking the northern side of the Tyrrhenian Sea, which offers spectacular views of the Gulf of Policastro, from Dino Island to Palinuro. The ancient watchtower called Torre Crawford and the magnificent rocky arch nicknamed Arco Magno are absolutely worth a visit!"
            imagePosition="right"
          />

          <TextImage
            imageUrl={images.castello}
            imageAlt="Le Castella"
            title="The Ionian coast"
            text="The Ionian coast has its own treasures, like Soverato, known as 'The Pearl of the Ionian,' and the beautiful beaches at Caminia and Pietragrande. Don't forget Le Castella, where you can explore the Aragonese Castle by the sea!"
            imagePosition="left"
          />

          <TextImage
            imageUrl={images.sila}
            imageAlt="Sila National Park"
            title="National Parks and more"
            text="There’s so much more to discover beyond the beaches! The wild beauty of Sila National Park is perfect for hiking, while Pollino National Park showcases stunning landscapes. History lovers will appreciate the ancient Greek ruins at Locri, reflecting the region’s rich heritage, and the charming medieval town of Gerace, home to an impressive Norman castle. Finally, at the “tip of the boot,” Reggio Calabria features a lovely seafront and the famous Riace Bronzes—two incredible ancient Greek statues preserved in the National Archaeological Museum."
            imagePosition="right"
          />
        </section>
      </Content>
    </div>
  );
}