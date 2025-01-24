<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MegaphoneSvelte from '../../../lib/16/solid/megaphone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MegaphoneSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Megaphone" />
