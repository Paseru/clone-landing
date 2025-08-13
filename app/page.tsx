"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { AlertCircle, CheckCircle2, Info, Terminal } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"
import { Toggle } from "@/components/ui/toggle"

export default function Home() {
  const [progress, setProgress] = useState(30)
  const [sliderValue, setSliderValue] = useState([50])
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Next.js + Tailwind CSS + shadcn/ui
          </h1>
          <p className="text-lg text-muted-foreground">
            Tous les composants shadcn/ui sont installés et prêts à l'emploi
          </p>
          <div className="flex gap-2 justify-center">
            <Badge>v15.0</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="outline">Tailwind v4</Badge>
            <Badge variant="destructive">46 composants</Badge>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Example */}
          <Card>
            <CardHeader>
              <CardTitle>Composants Formulaire</CardTitle>
              <CardDescription>Input, Select, Checkbox, etc.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="nom@exemple.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Votre message..." />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  Accepter les conditions
                </Label>
              </div>

              <RadioGroup defaultValue="option1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1" />
                  <Label htmlFor="option1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2" />
                  <Label htmlFor="option2">Option 2</Label>
                </div>
              </RadioGroup>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Soumettre</Button>
            </CardFooter>
          </Card>

          {/* Alerts & Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Alertes & Notifications</CardTitle>
              <CardDescription>Différents types d'alertes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  Ceci est une alerte d'information.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erreur</AlertTitle>
                <AlertDescription>
                  Une erreur s'est produite.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <Button 
                  onClick={() => toast.success("Action réussie!")}
                  variant="outline"
                  className="w-full"
                >
                  Toast Success
                </Button>
                <Button 
                  onClick={() => toast.error("Une erreur est survenue")}
                  variant="outline"
                  className="w-full"
                >
                  Toast Error
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Components */}
          <Card>
            <CardHeader>
              <CardTitle>Composants Interactifs</CardTitle>
              <CardDescription>Sliders, Switches, Progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Progress: {progress}%</Label>
                <Progress value={progress} />
                <Button 
                  size="sm"
                  onClick={() => setProgress((p) => Math.min(100, p + 10))}
                >
                  Augmenter
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Slider: {sliderValue[0]}</Label>
                <Slider 
                  value={sliderValue} 
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch 
                  checked={switchOn}
                  onCheckedChange={setSwitchOn}
                />
                <Label>Mode: {switchOn ? "ON" : "OFF"}</Label>
              </div>

              <div className="flex gap-2">
                <Toggle>Bold</Toggle>
                <Toggle>Italic</Toggle>
                <Toggle>Underline</Toggle>
              </div>
            </CardContent>
          </Card>

          {/* Tabs Component */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Tabs Navigation</CardTitle>
              <CardDescription>Navigation par onglets</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Compte</TabsTrigger>
                  <TabsTrigger value="password">Mot de passe</TabsTrigger>
                  <TabsTrigger value="settings">Paramètres</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="space-y-4">
                  <h3 className="text-lg font-medium">Informations du compte</h3>
                  <p className="text-sm text-muted-foreground">
                    Gérez vos informations personnelles ici.
                  </p>
                </TabsContent>
                <TabsContent value="password" className="space-y-4">
                  <h3 className="text-lg font-medium">Sécurité</h3>
                  <p className="text-sm text-muted-foreground">
                    Modifiez votre mot de passe et les paramètres de sécurité.
                  </p>
                </TabsContent>
                <TabsContent value="settings" className="space-y-4">
                  <h3 className="text-lg font-medium">Préférences</h3>
                  <p className="text-sm text-muted-foreground">
                    Personnalisez votre expérience utilisateur.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* User Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle>Profil Utilisateur</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">@shadcn</p>
                  <p className="text-xs text-muted-foreground">
                    Développeur UI/UX
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Options du profil
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profil</DropdownMenuItem>
                  <DropdownMenuItem>Paramètres</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Déconnexion</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>
        </div>

        {/* Accordion Section */}
        <Card>
          <CardHeader>
            <CardTitle>Questions Fréquentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Qu'est-ce que shadcn/ui ?</AccordionTrigger>
                <AccordionContent>
                  shadcn/ui est une collection de composants réutilisables construits avec Radix UI et Tailwind CSS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Comment installer les composants ?</AccordionTrigger>
                <AccordionContent>
                  Utilisez la CLI avec la commande: npx shadcn@latest add [composant]
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Les composants sont-ils personnalisables ?</AccordionTrigger>
                <AccordionContent>
                  Oui, tous les composants sont entièrement personnalisables et copiés directement dans votre projet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Dialog Example */}
        <div className="flex justify-center pb-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Ouvrir la boîte de dialogue</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Exemple de Dialog</DialogTitle>
                <DialogDescription>
                  Ceci est un exemple de boîte de dialogue modale avec shadcn/ui.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Les composants Dialog sont parfaits pour les confirmations et les formulaires.
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline">Annuler</Button>
                <Button>Confirmer</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Loading States */}
        <Card>
          <CardHeader>
            <CardTitle>États de chargement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}