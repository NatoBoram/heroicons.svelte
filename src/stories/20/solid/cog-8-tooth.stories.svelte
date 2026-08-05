<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Cog8ToothSvelte from '../../../lib/20/solid/cog-8-tooth.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Cog8ToothSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cog8Tooth" />
