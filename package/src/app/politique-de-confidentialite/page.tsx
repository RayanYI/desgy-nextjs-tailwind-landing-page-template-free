export const metadata = {
    title: 'Politique de Confidentialité - GoSitePro',
    description: 'Politique de confidentialité de GoSitePro.',
}

const PolitiqueConfidentialite = () => {
    return (
        <main className="bg-white dark:bg-gray-900 pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Politique de Confidentialité</h1>

                <div className="prose dark:prose-invert max-w-none space-y-12">

                    <section>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Cette politique de confidentialité décrit comment GoSitePro collecte, utilise et protège vos données personnelles lorsque vous utilisez notre site web.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">1. Données collectées</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Nous collectons uniquement les données strictement nécessaires au traitement de votre demande via notre formulaire de contact :
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 space-y-2">
                            <li>Nom et Prénom</li>
                            <li>Adresse email</li>
                            <li>Type de projet envisagé</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">2. Utilisation des données</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Ces données sont utilisées exclusivement pour :
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mt-4 space-y-2">
                            <li>Vous recontacter suite à votre demande.</li>
                            <li>Établir un devis ou une proposition commerciale.</li>
                            <li>Gérer la relation client si nous travaillons ensemble.</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-300 mt-4">
                            <strong>Nous ne vendons, ni ne louons, ni ne partageons vos données avec des tiers à des fins commerciales.</strong>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">3. Cookies</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Ce site n&apos;utilise pas de cookies publicitaires ou de traçage intrusifs. Nous pouvons utiliser des cookies techniques strictement nécessaires au bon fonctionnement du site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">4. Vos droits</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ce droit, il vous suffit de nous envoyer un email à : <strong>contact@gositepro.fr</strong>.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    )
}

export default PolitiqueConfidentialite
