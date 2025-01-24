<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MegaphoneSvelte from '../../../lib/24/outline/megaphone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MegaphoneSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Megaphone" />
