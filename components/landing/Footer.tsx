import Link from "next/link";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Footer = () => {
  const navigation = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Topics", href: "/topics" },
    ],
    support: [
      { name: "Documentation", href: "/docs" },
      { name: "Guides", href: "/guides" },
      { name: "FAQ", href: "/faq" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
    social: [
      {
        name: "Twitter",
        href: "https://twitter.com",
        icon: Twitter,
      },
      {
        name: "Facebook",
        href: "https://facebook.com",
        icon: Facebook,
      },
      {
        name: "Instagram",
        href: "https://instagram.com",
        icon: Instagram,
      },
      {
        name: "GitHub",
        href: "https://github.com",
        icon: Github,
      },
    ],
  };

  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold text-white">
              FlashLearn
            </Link>
            <p className="mt-4 text-gray-400">
              Transform your learning experience with our interactive flashcard
              system. Master any topic at your own pace.
            </p>
            <div className="mt-4 flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                    asChild
                  >
                    <Link href={item.href}>
                      <Icon className="h-5 w-5" />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          <NavigationMenu orientation="vertical">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h3>
            <NavigationMenuList className="flex-col items-start space-y-2">
              {navigation.product.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-400 hover:text-white">
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu orientation="vertical">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <NavigationMenuList className="flex-col items-start space-y-2">
              {navigation.support.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-400 hover:text-white">
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu orientation="vertical">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <NavigationMenuList className="flex-col items-start space-y-2">
              {navigation.company.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-400 hover:text-white">
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FlashLearn. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};