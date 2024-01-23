@extends('admin.layout.master');
@section('content')
<div class="content-wrapper">
    <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-dark">Admin Dashboard</h1>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <section class="content">
        {{-- {{ dd($users) }} --}}
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header border-transparent">
                          <h3 class="card-title">order</h3>

                          <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                              <i class="fas fa-minus"></i>
                            </button>
                          </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table class="table table-bordered">
                              <thead>
                              <tr>
                                <th style="width: 10px">Number</th>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Note</th>
                                <th>Created_at</th>
                              </tr>
                              </thead>
                              <tbody>
                                @foreach ($dashboards as $dashboard)
                                    <tr>
                                        <td>{{ $loop->iteration}}</td>
                                        <td>{{ $dashboard->user_id }}</td>
                                        <td>{{ $dashboard->username }}</td>
                                        <th>{{ $dashboard->phone }}</th>
                                        <td>{{ $dashboard->email }}</td>
                                        <td>{{ $dashboard->address }}</td>
                                        <td>{{ $dashboard->city }}</td>
                                        <td>{{ $dashboard->country }}</td>
                                        <td>{{ $dashboard->note }}</td>
                                        <td>{{ $dashboard->created_at }}</td>

                                    </tr>
                                @endforeach
                              </tbody>
                            </table>
                          <!-- /.table-responsive -->
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer clearfix">
                            {{ $dashboards->links('pagination::bootstrap-5') }}
                        </div>
                        <!-- /.card-footer -->
                      </div>
                </div>
            </div>
        </div>
    </section>
@endsection
