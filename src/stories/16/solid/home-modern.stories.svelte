<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HomeModernSvelte from '../../../lib/16/solid/home-modern.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: HomeModernSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="HomeModern" />
