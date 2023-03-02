<?php

namespace App\Controller;

use App\Entity\Post;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/post')]
class PostController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager)
    {
    }

    #[Route('/', name: 'app_post_index')]
    public function index(PostRepository $postRepository): Response
    {
        $posts = $postRepository->findAll();

        return $this->render('post/index.html.twig', [
            'posts' => $posts,
        ]);
    }

    /**
     * @throws ORMException
     */
    #[Route('/create', name: 'app_post_create')]
    public function create(Request $request):Response{
        $post = new Post();
        $post->setTitle('This is a Title');

        $this->entityManager->persist($post);
        $this->entityManager->flush();

        return $this->render('post/create.html.twig');

    }

//    public function show(int $id, VinylMixRepository $vinylMixRepository):Response{
    /* This works on 6.2, On versions < 6.2, run 'composer require sensio/framework-extra-bundle' */
//    #[Route('/show/{slug}',name:'app_post_show')]
//    public function show(Post $post):Response{
//        // slug-name must match Query name ie: (id => $id)
//        // use for querying single item, otherwise inject Repository Service
//
//        return $this->render('post/show.html.twig',[
//            'post'=>$post
//        ]);
//    }
}
