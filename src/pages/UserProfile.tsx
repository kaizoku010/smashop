
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, ShoppingBag, Heart, MapPin, Bell, LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import Kanzu from "../media/kanzu.jpg"
import Kanzu2 from "../media/kanzu2.jpg"
import Rafik from "../media/rafix.jpg"

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your full address'),
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please enter your state'),
  zipCode: z.string().min(5, 'Please enter a valid zip code'),
});

// Mock orders data
const orders = [
  { id: '43e8', date: '2023-09-15', status: 'Delivered', total: 76.45 },
  { id: '912f', date: '2023-08-27', status: 'Delivered', total: 124.30 },
  { id: '331a', date: '2023-07-02', status: 'Delivered', total: 55.99 },
];

// Mock wishlist data
const wishlist = [
  { id: 'prod1', name: 'Rafik Bag', price: 4.99, image: Rafik },
  { id: 'prod2', name: 'Kanzu', price: 5.99, image: Kanzu },
  { id: 'prod3', name: 'Kanzu2', price: 3.49, image: Kanzu2 },
];

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Initialize form with mock data
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: 'Kalanzi',
      lastName: 'Dixon',
      email: 'm.dixon@example.com',
      phone: '(555) 123-4567',
      address: '123 Main Street',
      city: 'Kampala, Uganda',
      state: 'Central',
      zipCode: '0000',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar */}
          <div className="w-full md:w-1/4">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3" />
                  <AvatarFallback>KD</AvatarFallback>
                </Avatar>
                <CardTitle>Kalanzi Dixon</CardTitle>
                <CardDescription>m.dixon@example.com</CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  <Button 
                    variant={activeTab === 'profile' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab('profile')}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button 
                    variant={activeTab === 'orders' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab('orders')}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Orders
                  </Button>
                  <Button 
                    variant={activeTab === 'wishlist' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab('wishlist')}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </Button>
                  <Button 
                    variant={activeTab === 'addresses' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab('addresses')}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Addresses
                  </Button>
                  <Button 
                    variant={activeTab === 'notifications' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab('notifications')}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Button 
                    variant={activeTab === 'settings' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </nav>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-red-500 hover:text-red-700">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="w-full md:w-3/4">
            {activeTab === 'profile' && (
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details here</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Address Information</h3>
                        <div className="grid grid-cols-1 gap-4">
                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Street Address</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="zipCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Zip Code</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full md:w-auto">Save Changes</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
            
            {activeTab === 'orders' && (
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View your previous orders</CardDescription>
                </CardHeader>
                <CardContent>
                  {orders.length === 0 ? (
                    <div className="text-center py-10">
                      <p className="text-gray-500 mb-4">You haven't placed any orders yet</p>
                      <Button onClick={() => navigate('/')}>Start Shopping</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map(order => (
                        <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex flex-wrap justify-between items-center">
                            <div>
                              <p className="font-medium">Order #{order.id}</p>
                              <p className="text-sm text-gray-500">{order.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${order.total.toFixed(2)}</p>
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 mt-1">
                                {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="mt-3 flex justify-end">
                            <Button variant="outline" size="sm">View Details</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
            
            {activeTab === 'wishlist' && (
              <Card>
                <CardHeader>
                  <CardTitle>Wishlist</CardTitle>
                  <CardDescription>Items you've saved for later</CardDescription>
                </CardHeader>
                <CardContent>
                  {wishlist.length === 0 ? (
                    <div className="text-center py-10">
                      <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                      <Button onClick={() => navigate('/')}>Explore Products</Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlist.map(item => (
                        <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="relative pt-[100%]">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full text-red-500 hover:bg-gray-100">
                              <Heart className="h-4 w-4 fill-current" />
                            </button>
                          </div>
                          <div className="p-3">
                            <h3 className="font-medium line-clamp-1">{item.name}</h3>
                            <p className="font-bold mt-1">${item.price.toFixed(2)}</p>
                            <Button variant="outline" size="sm" className="w-full mt-2">
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
            
            {activeTab === 'addresses' && (
              <Card>
                <CardHeader>
                  <CardTitle>Saved Addresses</CardTitle>
                  <CardDescription>Manage your delivery addresses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 relative hover:shadow-md transition-shadow">
                      <p className="font-medium mb-1">Home</p>
                      <p className="text-sm">123 Main Street</p>
                      <p className="text-sm">Kampalaa 0000</p>
                      <p className="text-sm">Uganda</p>
                      <p className="text-sm mt-2">Phone: (000) 123-4567</p>
                      
                      <div className="absolute top-2 right-2 flex gap-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="mt-4 flex justify-between">
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          Default
                        </span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 relative hover:shadow-md transition-shadow">
                      <p className="font-medium mb-1">Work</p>
                      <p className="text-sm">123 Main Street</p>
                      <p className="text-sm">Kampalaa 0000</p>
                      <p className="text-sm">Uganda</p>
                      <p className="text-sm mt-2">Phone: (000) 123-4567</p>
                      
                      <div className="absolute top-2 right-2 flex gap-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="h-[170px] border-dashed flex flex-col items-center justify-center">
                      <MapPin className="h-8 w-8 mb-2" />
                      <span>Add New Address</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {activeTab === 'notifications' && (
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Control what notifications you receive</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Order updates</p>
                        <p className="text-sm text-gray-500">Receive notifications about your order status</p>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="orderUpdates" 
                          className="form-checkbox h-5 w-5 text-xstore-green rounded"
                          defaultChecked
                        />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Promotions</p>
                        <p className="text-sm text-gray-500">Get notified about sales and special offers</p>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="promotions" 
                          className="form-checkbox h-5 w-5 text-xstore-green rounded"
                          defaultChecked
                        />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Wishlist updates</p>
                        <p className="text-sm text-gray-500">Get notified when items in your wishlist go on sale</p>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="wishlistUpdates" 
                          className="form-checkbox h-5 w-5 text-xstore-green rounded"
                          defaultChecked
                        />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Newsletter</p>
                        <p className="text-sm text-gray-500">Receive our weekly newsletter</p>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="newsletter" 
                          className="form-checkbox h-5 w-5 text-xstore-green rounded"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            )}
            
            {activeTab === 'settings' && (
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Password</h3>
                      <p className="text-sm text-gray-500">Update your password to keep your account secure</p>
                      <Button variant="outline">Change Password</Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Language</h3>
                      <p className="text-sm text-gray-500">Choose your preferred language</p>
                      <select className="w-full p-2 border rounded-md">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                      </select>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-red-500">Danger Zone</h3>
                      <p className="text-sm text-gray-500">Permanently delete your account and all your data</p>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
