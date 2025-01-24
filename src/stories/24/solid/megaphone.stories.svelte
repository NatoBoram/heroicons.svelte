<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MegaphoneSvelte from '../../../lib/24/solid/megaphone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MegaphoneSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Megaphone" />
