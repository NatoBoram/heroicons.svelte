import type { Meta, StoryObj } from '@storybook/svelte'
import { FaceFrown as FaceFrownSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: FaceFrownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FaceFrownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FaceFrown: Story = {}
