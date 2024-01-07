import type { Meta, StoryObj } from '@storybook/svelte'
import FilmSvelte from '../../../lib/16/solid/film.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FilmSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FilmSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Film: Story = {}
