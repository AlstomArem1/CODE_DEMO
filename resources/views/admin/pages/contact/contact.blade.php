@extends('admin.layout.master');
@section('content')
<div class="content-wrapper">
    <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-dark">Admin Mail</h1>
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
                          <h3 class="card-title">Contact</h3>

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
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>Created_at</th>
                              </tr>
                              </thead>
                              <tbody>
                                @foreach ($contacts as $contact)
                                    <tr>
                                        <td>{{ $loop->iteration}}</td>
                                        <td>{{ $contact->yourname }}</td>
                                        <td>{{ $contact->email }}</td>
                                        <td>{{ $contact->sub }}</td>
                                        <td>{{ $contact->message }}</td>
                                        <td>{{ $contact->created_at }}</td>


                                    </tr>
                                @endforeach
                              </tbody>
                            </table>
                          <!-- /.table-responsive -->
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer clearfix">
                            {{ $contacts->links('pagination::bootstrap-5') }}

                        </div>
                        <!-- /.card-footer -->
                      </div>
                </div>
            </div>
        </div>
    </section>
@endsection
