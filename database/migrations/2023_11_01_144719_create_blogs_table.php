<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('name',255)->nullable();
            $table->text('introduce')->nullable();
            $table->text('news')->nullable();
            $table->string('image',255)->nullable();
            $table->timestamps();


            $table->unsignedBigInteger('blog_category_id');
            //buoi 2: tao khoa ngoai cho column do
            $table->foreign('blog_category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
