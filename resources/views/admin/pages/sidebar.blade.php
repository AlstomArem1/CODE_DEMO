<aside class="main-sidebar sidebar-dark-primary elevation-4 ">
    <!-- Brand Logo -->

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ Auth::user()->name }}</a>
          <a style="font-size: 12px" href="#" class="d-block">{{ Auth::user()->email }}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('admin.dashboard.index') }}" class="nav-link {{ request()->route()->getName() === 'admin.dashboard.index' ? 'active' : '' }}">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="{{ route('admin.users.index') }}" class="nav-link {{ request()->route()->getName() === 'admin.users.index' ? 'active' : '' }}">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Layout Users

              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Charts
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ChartJS</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
                Categories
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href="{{ route('admin.categories.index') }}" class="nav-link {{ request()->route()->getName() === 'admin.categories.index' ? 'active' : '' }}">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Categories List</p>
                    </a>
                  </li>
                  <li class="nav-item">
                        <a href="{{ route('admin.categories.add') }}" class="nav-link {{ request()->route()->getName() === 'admin.categories.add' ? 'active' : '' }}">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Categories Create</p>
                        </a>
                  </li>

            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Products
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href="{{ route('admin.product.index') }}" class="nav-link {{ request()->route()->getName() === 'admin.product.index' ? 'active' : '' }}">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Products List</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="{{ route('admin.product.create') }}" class="nav-link {{ request()->route()->getName() === 'admin.product.create' ? 'active' : '' }}">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Products Create</p>
                    </a>
                  </li>
            </ul>
          </li>
          <li class="nav-header">EXAMPLES</li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-envelope"></i>
              <p>
                Mailbox
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ route('admin.contact.index') }}" class="nav-link {{ request()->route()->getName() === 'admin.contact.index' ? 'active' : '' }}">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Contact</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                new Blog
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href="{{ route('admin.blog.index') }}" class="nav-link {{ request()->route()->getName() === 'admin.blog.index' ? 'active' : '' }}">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Blog List</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="{{ route('admin.blog.add') }}" class="nav-link {{ request()->route()->getName() === 'admin.blog.add' ? 'active' : '' }}">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Blog Create</p>
                    </a>
                  </li>
            </ul>
          </li>

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
