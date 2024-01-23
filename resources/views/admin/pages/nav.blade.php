<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>

    </ul>


    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
        <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <span style="color: blue">{{ Auth::user()->name }}</span><x-bxs-down-arrow style="height: 10px; width: 10px; margin: 0px 5px"/>
            </a>
            <div class="dropdown-menu  dropdown-menu-right">
                <!-- Message Start -->
                <!-- Responsive Navigation Menu -->
                <div :class="{'block': open, 'hidden': ! open}" class="hidden sm:hidden">
                <!-- Responsive Settings Options -->
                    <div class="menulogout">
                        <div class="mt-1 space-t-1 ">
                            <!-- Authentication -->
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <x-responsive-nav-link :href="route('logout')"
                                        onclick="event.preventDefault();
                                                    this.closest('form').submit();">
                                    Log Out
                                </x-responsive-nav-link>
                            </form>
                        </div>
                        <!-- Responsive Navigation Menu -->
                        <div :class="{'block': open, 'hidden': ! open}" class="hidden sm:hidden"></div>
                    </div>
                </div>
                <!-- Message End -->
                </a>
            </div>
        </li>
      <!-- Notifications Dropdown Menu -->
    </ul>
  </nav>
