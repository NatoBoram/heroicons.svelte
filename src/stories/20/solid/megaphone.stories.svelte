<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MegaphoneSvelte from '../../../lib/20/solid/megaphone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MegaphoneSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Megaphone" />
