import type { Meta, StoryObj } from '@storybook/svelte'
import FaceFrownSvelte from '../../../lib/24/solid/face-frown.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: FaceFrownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FaceFrownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FaceFrown: Story = {}
