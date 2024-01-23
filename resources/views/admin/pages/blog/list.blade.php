@extends('admin.layout.master')

@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Blog List</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Blog List</li>
                        </ol>
                    </div>
                    @if (session('message'))
                    <div class="col-sm-12 alert alert-success">
                        {{ session('message')}}
                    </div>
                    @endif
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <div class="row">
                                    <div class="col-md-8">
                                        <form method="get">
                                            <input type="text"  placeholder="Search..." >
                                            <select name="status">
                                                <option value="">---Please Select---</option>
                                                <option value="1">Open</option>
                                                <option value="0">Close</option>
                                            </select>
                                            <button class="btn btn-primary" type="submit" >Search</button>

                                        </form>
                                    </div>

                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <table id="table-product" class="table table-bordered">

                                    <thead>
                                        <tr>
                                            <th style="width: 10px">Stt</th>
                                            <th>Image</th>
                                            <th>UserName</th>
                                            <th>Link</th>
                                            <th>Introduce</th>
                                            <th>belong</th>
                                            <th>Update</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse ($blogs as $blog)
                                            <tr>
                                                <td>{{ $loop->iteration }}</td>
                                                <td>
                                                    @php
                                                        $imagesLink = is_null($blog->image) || !file_exists('images/'.$blog->image)
                                                        ? 'https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg'
                                                        : asset('images/'. $blog->image);
                                                    @endphp
                                                    <img src="{{ $imagesLink }}" alt="{{ $blog->name}}" width="200" height="200" />
                                                </td>
                                                <td>{{ $blog->name }}</td>
                                                <td>{{ $blog->news }}</td>
                                                <td>{{ $blog->introduce }}</td>
                                                <td>{{ $blog->blog_category->name }}</td>
                                                <td>{{ $blog->updated_at }}</td>

                                                <td>
                                                    <form
                                                    action="{{ route('admin.blog.delete',['blog' => $blog->id ]) }}"
                                                    method="get">
                                                      @csrf
                                                      @method('delete')
                                                      <button type="sumbit" name="sumbit" class="btn btn-danger">Delete</button>
                                                    </form>
                                                      <a href="{{ route('admin.blog.detail',['blog' =>  $blog->id]) }}" class="btn btn-primary">Edit</a>
                                                  </td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td colspan="4">No data</td>
                                            </tr>
                                        @endforelse
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer clearfix">
                                {{-- 'admin.pagination.my-pagination' --}}
                                {{ $blogs->links('pagination::bootstrap-5') }}
                            </div>
                        </div>
                        <!-- /.card -->
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
@endsection
@section('js-custom')
    <script  type="text/javascript">
        //let table = new DataTable('#table-product');
        // $('#table-product').dataTable( {
        // "pageLength": 1
        // } );
    </script>
@endsection
