import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Zap, Shield, Trophy, Smartphone, Volume2, Github, Play, ArrowDown, Target, Gem } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function TwoFreeLanding() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Two Free",
    "description": "An open-source survival game where you control one of the last free robots. Collect energy diamonds underground while avoiding missile strikes.",
    "url": "http://twofree.pl/",
    "gameLocation": "https://twofree.tuhaj.pl/",
    "genre": ["Survival", "Action", "Indie"],
    "gamePlatform": ["Web Browser", "Mobile Web"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Tuhaj"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "42"
    }
  }

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-cyan-400">TWO FREE</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/Tuhaj/two-free"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label="View Two Free on GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main>
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Open Source Game</Badge>

              <h1 className="text-6xl md:text-8xl font-bold text-cyan-400 mb-6 tracking-wider">TWO FREE</h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                In a world torn apart by war, you are one of the two remaining free robots. Your mission is to collect
                precious energy diamonds deep underground while avoiding deadly missile strikes from above.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold px-8 py-6 text-lg"
                >
                  <Link href="https://twofree.tuhaj.pl/" target="_blank" rel="noopener">
                    <Play className="mr-2 h-5 w-5" />
                    Play Now
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg"
                >
                  <Link href="https://github.com/Tuhaj/two-free" target="_blank" rel="noopener">
                    <Github className="mr-2 h-5 w-5" />
                    View Source
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Game Features */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">Game Features</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-slate-800/50 border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Gem className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Energy Diamonds</h3>
                    <p className="text-slate-300">
                      Collect precious energy diamonds to power your movement and progress through levels
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Underground Shelter</h3>
                    <p className="text-slate-300">Hide underground to escape deadly missile attacks from above</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Progressive Difficulty</h3>
                    <p className="text-slate-300">Progress through increasingly difficult levels that test your skills</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Achievements</h3>
                    <p className="text-slate-300">Collect achievements as you play and master the game</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Smartphone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Mobile Ready</h3>
                    <p className="text-slate-300">Touch controls optimized for mobile devices</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Volume2 className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Background Music</h3>
                    <p className="text-slate-300">Immersive background music (press speaker button twice to enable)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How to Play */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">How to Play</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-slate-800/50 border-cyan-500/30">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                      <Gamepad2 className="mr-2 h-6 w-6" />
                      Controls
                    </h3>
                    <div className="space-y-3 text-slate-300">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">↑</kbd>
                          <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">←</kbd>
                          <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">↓</kbd>
                          <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">→</kbd>
                        </div>
                        <span>Movement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowDown className="h-4 w-4 text-cyan-400" />
                        <span>Dig underground for safety</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-cyan-400" />
                        <span>Fire button - shoots energy blast</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-cyan-500/30">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">Strategy</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Collect energy diamonds to power your movement</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Hide underground when missiles approach</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Use energy blasts strategically</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Collect all diamonds to advance levels</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-cyan-400 mb-6">Ready to Survive the War?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Join the resistance as one of the last free robots. Can you collect all the energy diamonds and survive?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold px-8 py-6 text-lg"
                >
                  <Link href="https://twofree.tuhaj.pl/" target="_blank" rel="noopener">
                    <Play className="mr-2 h-5 w-5" />
                    Start Playing
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg"
                >
                  <Link href="https://github.com/Tuhaj/two-free" target="_blank" rel="noopener">
                    <Github className="mr-2 h-5 w-5" />
                    Contribute on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-cyan-500/30 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Gamepad2 className="h-6 w-6 text-cyan-400" />
                <span className="text-cyan-400 font-bold">Two Free</span>
              </div>

              <div className="flex items-center space-x-6 text-slate-400">
                <Link href="https://twofree.tuhaj.pl/" target="_blank" rel="noopener" className="hover:text-cyan-400 transition-colors">
                  Play Game
                </Link>
                <Link
                  href="https://github.com/Tuhaj/two-free"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Source Code
                </Link>
              </div>
            </div>

            <div className="text-center mt-6 pt-6 border-t border-slate-700">
              <p className="text-slate-400">
                © {new Date().getFullYear()} Two Free. Open source game available on GitHub.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}