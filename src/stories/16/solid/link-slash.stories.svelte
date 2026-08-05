<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LinkSlashSvelte from '../../../lib/16/solid/link-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: LinkSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="LinkSlash" />
